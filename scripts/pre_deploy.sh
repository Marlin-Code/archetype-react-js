#!/bin/bash
if [ "$npm_package_config_cloudFormationStackName" = "" ]
then
  echo "Stack name not configured, please insert bucket name in package.json"
  exit 100
elif [ "$npm_package_config_deploymentBucket" = "" ]
then
  echo "Deployment bucket not configured, please insert bucket name in package.json"
  exit 100
else
    echo "Pre Deploy Checks successful"
fi