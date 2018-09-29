#!/bin/bash -e 
# ex: run.sh -u test02 -n node -p 8000 -l /Desktop/docker-node-tutorial/Offical-Node-JS-Way
while getopts u:n:p:l: option
do
case "${option}"
in
u) USER=${OPTARG};;
n) APP=${OPTARG};;
p) PORT=${OPTARG};;
l) LOCATION=${OPTARG};;
esac
done

# Build Container
docker build -t $USER/node-base .

# List Containers
docker images

# Determine OS and run Docker container with mounted volume
if [[ $OSTYPE == "msys" ]]; then
    docker run -v C:/Users/$(whoami)/$LOCATION:/usr/src/app -it -p $PORT:8080 $USER/node-base bash
else 
    docker run -v $LOCATION:/app -it -p $PORT:8000 $USER/node-base
fi


