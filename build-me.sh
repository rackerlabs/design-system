#! /bin/bash

set -eo pipefail

docker build -t helix-test .
docker run --rm -p 4000:4000 --name helix -i -t helix-test
