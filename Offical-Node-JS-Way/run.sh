#!/bin/bash -e 
# ex: run.sh -u test -n node_test -p 8080

while getopts u:n:p: option
do
case "${option}"
in
u) USER=${OPTARG};;
n) APP=${OPTARG};;
p) PORT=${OPTARG};;
esac
done

# Run Docker Container in Background
docker run -p $PORT:8080 -d $USER/$APP

# Show Running Instances
docker ps

