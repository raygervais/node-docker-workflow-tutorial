#!/bin/bash -e 


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

