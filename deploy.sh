#!/bin/bash
PROJECT=spotify-together

TEST_PORT=3001

ACC_HOST=149.202.216.168
ACC_USER=spotify
ACC_PORT=3001

#Don't touch this
ENV=$1
source ./node_modules/@labela/deploy/index.sh
