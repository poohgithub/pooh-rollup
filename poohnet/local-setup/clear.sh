#!/usr/bin/env bash

docker-compose -f docker-compose-dev.yml down --volumes
docker-compose pull
