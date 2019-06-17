#!/bin/bash
PROJECT=spotify-together

TEST_PORT=2027
PROD_HOST=149.202.216.168
PROD_USER=spotify

#Don't touch this
ENV=$1
source ./node_modules/@labela/deploy/index.sh
