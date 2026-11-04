#!/usr/bin/env bash
# Purge the entire Rocket.net CDN cache for one site.
#
# Required env:
#   ROCKET_USER       Rocket.net account email
#   ROCKET_PASSWORD   Rocket.net account password   (or ROCKET_PASS)
#   ROCKET_SITE_ID    Numeric site ID               (or ROCKET_SITE_ID_WEB)
#
# Works in GitHub Actions (values from secrets) and locally:
#   set -a; source .env; set +a
#   bash scripts/rocket-purge-cache.sh
#
# API docs:
#   https://rocketdotnet.readme.io/reference/appcontrollersauthentication_controllerlogin
#   https://rocketdotnet.readme.io/reference/appcontrollerscdn_cache_controllerpurge_site_cache_everything

set -euo pipefail

API="https://api.rocket.net/v1"

# Accept the names used in the local .env as fallbacks.
ROCKET_PASSWORD="${ROCKET_PASSWORD:-${ROCKET_PASS:-}}"
ROCKET_SITE_ID="${ROCKET_SITE_ID:-${ROCKET_SITE_ID_WEB:-}}"

: "${ROCKET_USER:?ROCKET_USER is not set}"
: "${ROCKET_PASSWORD:?ROCKET_PASSWORD is not set}"
: "${ROCKET_SITE_ID:?ROCKET_SITE_ID is not set}"

if ! [[ "$ROCKET_SITE_ID" =~ ^[0-9]+$ ]]; then
  echo "ROCKET_SITE_ID must be numeric, got: '$ROCKET_SITE_ID'" >&2
  exit 1
fi

# 1) Log in. Build the JSON with jq so special characters in the password are escaped.
login_body=$(jq -n --arg u "$ROCKET_USER" --arg p "$ROCKET_PASSWORD" \
  '{username: $u, password: $p}')

login_resp=$(curl -sS --fail-with-body --retry 3 --retry-all-errors \
  -X POST "$API/login" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d "$login_body") || {
    echo "Login failed:" >&2
    echo "$login_resp" >&2
    exit 1
  }

token=$(jq -r '.token // empty' <<<"$login_resp")
if [[ -z "$token" ]]; then
  echo "Login response had no token:" >&2
  echo "$login_resp" >&2
  exit 1
fi

# Hide the token from GitHub Actions logs.
if [[ -n "${GITHUB_ACTIONS:-}" ]]; then
  echo "::add-mask::$token"
fi

# 2) Purge everything (primary domain + any additional domains).
purge_resp=$(curl -sS --fail-with-body --retry 3 --retry-all-errors \
  -X POST "$API/sites/$ROCKET_SITE_ID/cache/purge_everything?include_additional_domains=true" \
  -H "Authorization: Bearer $token" \
  -H "Accept: application/json") || {
    echo "Purge failed for site $ROCKET_SITE_ID:" >&2
    echo "$purge_resp" >&2
    exit 1
  }

if [[ "$(jq -r '.success // true' <<<"$purge_resp" 2>/dev/null)" == "false" ]]; then
  echo "API reported failure for site $ROCKET_SITE_ID:" >&2
  echo "$purge_resp" >&2
  exit 1
fi

echo "CDN cache purged for site $ROCKET_SITE_ID."