#!/bin/bash

export PGPASSWORD='node-user'

database="monstersdb"

echo "Configuring database: $database"

#dropdb -U node-user monstersdb
#createdb -U node-user monstersdb

psql -U node-user monstersdb < ./bin/sql/monsters.sql

echo "$database configured"