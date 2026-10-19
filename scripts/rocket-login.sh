#!/usr/bin/env bash
set -euo pipefail
set -a; source .env; set +a
API="https://api.rocket.net/v1"

# Log in; keep the raw response in a gitignored file
curl -sS -X POST "$API/login" \
  -H 'Content-Type: application/json' \
  -d "$(jq -n --arg u "$ROCKET_USER" --arg p "$ROCKET_PASS" '{username:$u,password:$p}')" \
  > .rocket-login.json

# Print only the PATHS in the response (not the values), so the token never hits your terminal
echo "Response shape:"
jq -r '[paths | map(tostring) | join(".")] | .[]' .rocket-login.json