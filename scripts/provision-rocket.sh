#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
set -a; source .env; set +a

: "${LOCATION_ID:?set LOCATION_ID in .env}" "${ADMIN_EMAIL:?}" "${WP_ADMIN_USER:?}" "${WP_ADMIN_PASS:?}"
API="https://api.rocket.net/v1"
AUTH="Authorization: Bearer $(cat .rocket-token)"
APPLY=false; [[ "${1:-}" == "--apply" ]] && APPLY=true

# Payload for the static site (Next.js export goes here)
WEB=$(jq -n --argjson loc "$LOCATION_ID" \
  '{name:"Joao Angeline", label:"portfolio-web", site_type:1, location:$loc}')

# Payload for the headless WordPress CMS
CMS=$(jq -n --argjson loc "$LOCATION_ID" \
  --arg e "$ADMIN_EMAIL" --arg u "$WP_ADMIN_USER" --arg p "$WP_ADMIN_PASS" \
  '{name:"Joao Angeline CMS", label:"portfolio-cms", site_type:0, location:$loc,
    admin_email:$e, admin_username:$u, admin_password:$p,
    install_plugins:"wp-graphql"}')

if ! $APPLY; then
  echo "DRY RUN. Nothing created. Payloads (password hidden):"
  echo "$WEB" | jq .
  echo "$CMS" | jq '.admin_password="********"'
  echo "Run with --apply to create both sites."
  exit 0
fi

create () {  # $1 = payload, $2 = output file
  curl -sS -X POST "$API/sites" -H "$AUTH" -H 'Content-Type: application/json' -d "$1" > "$2"
  jq '{success, errors, messages}' "$2"
  jq -e '.success == true' "$2" > /dev/null || { echo "FAILED: see $2"; exit 1; }
}

echo "Creating static site..."; create "$WEB" .rocket-site-web.json
echo "Creating WordPress CMS..."; create "$CMS" .rocket-site-cms.json
echo "Done. Raw responses saved in .rocket-site-*.json (gitignored)."