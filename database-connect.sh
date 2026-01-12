#!/bin/bash

source ./.env

if [ -z "$DATABASE_PASSWORD" ]; then
  echo "Error: DATABASE_PASSWORD environment variable is not set."
  exit 1
fi


docker run -it --rm --network host -e PGPASSWORD="$DATABASE_PASSWORD" postgres psql -h localhost -U postgres
