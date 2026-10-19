#!/usr/bin/env bash
set -euo pipefail

: "${ROCKET_USER:?}" "${ROCKET_PASS:?}" "${LOCATION_ID:?}"  # LOCATION_ID from GET /v1/sites/locations (the "List hosting regions" endpoint)
API="https://api.rocket.net/v1"

# 1. Authenticate (token is valid for 7 days)
TOKEN=$(curl -sS -X POST "$API/login" \
  -H 'Content-Type: application/json' \
  -d "$(jq -n --arg u "$ROCKET_USER" --arg p "$ROCKET_PASS" '{username:$u,password:$p}')" \
  | jq -r '.result.token // .token')   # adjust to the actual response shape

[ -n "$TOKEN" ] && [ "$TOKEN" != "null" ] || { echo "login failed"; exit 1; }

create_site () {  # name, label, site_type, [extra json]
  curl -sS -X POST "$API/sites" \
    -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
    -d "$(jq -n --arg n "$1" --arg l "$2" --argjson t "$3" --argjson loc "$LOCATION_ID" \
          --argjson extra "${4:-{\}}" \
          '{name:$n,label:$l,site_type:$t,location:$loc} + $extra')"
}

# 2. Static site for the Next.js export
create_site "Joao Angeline" "portfolio-web" 1

# 3. Headless WordPress CMS
create_site "Joao Angeline CMS" "portfolio-cms" 0 \
  "$(jq -n --arg e "$ADMIN_EMAIL" --arg u "$WP_ADMIN_USER" --arg p "$WP_ADMIN_PASS" \
     '{admin_email:$e,admin_username:$u,admin_password:$p,
       install_plugins:"wp-graphql,advanced-custom-fields"}')"