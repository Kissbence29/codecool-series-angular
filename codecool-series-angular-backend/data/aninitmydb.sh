#!/bin/bash
echo $PWD
psql -U postgres -d codecool-series -a -f docker-entrypoint-initdb.d/data/create_schema.sql
psql -U postgres -d codecool-series -a -f docker-entrypoint-initdb.d/data/codecool_public_genres.sql
psql -U postgres -d codecool-series -a -f docker-entrypoint-initdb.d/data/codecool_public_shows.sql
psql -U postgres -d codecool-series -a -f docker-entrypoint-initdb.d/data/codecool_public_show_genres.sql
psql -U postgres -d codecool-series -a -f docker-entrypoint-initdb.d/data/codecool_public_seasons.sql
psql -U postgres -d codecool-series -a -f docker-entrypoint-initdb.d/data/codecool_public_episodes.sql
psql -U postgres -d codecool-series -a -f docker-entrypoint-initdb.d/data/codecool_public_actors.sql
psql -U postgres -d codecool-series -a -f docker-entrypoint-initdb.d/data/codecool_public_show_characters.sql
