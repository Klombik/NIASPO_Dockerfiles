#!/bin/bash

node /usr/src/app/server.js &
echo "HTTP server started on port 8080"

tail -f /dev/null