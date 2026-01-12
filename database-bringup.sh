#!/bin/bash

source ./.env

if [ -z "$DATABASE_PASSWORD" ]; then
  echo "Error: DATABASE_PASSWORD environment variable is not set."
  exit 1
fi

docker run --name some-postgres -e POSTGRES_PASSWORD="$DATABASE_PASSWORD" -p 5432:5432 -d --rm postgres
