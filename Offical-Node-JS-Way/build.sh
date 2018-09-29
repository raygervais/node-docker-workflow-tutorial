#!/bin/bash -e 
# ex: build.sh  -u test -n node_test

while getopts u:n: option
do
case "${option}"
in
u) USER=${OPTARG};;
n) APP=${OPTARG};;
esac
done

# Build Container
docker build -t $USER/$APP .

# List Containers
docker images

