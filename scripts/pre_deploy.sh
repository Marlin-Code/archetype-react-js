#!/bin/bash
if [ "$npm_package_config_deploymentBucket" = "" ]
then
  echo "Deployment bucket not configured, please insert bucket name in package.json"
  exit 100
elif [ "$npm_package_config_cloudfrontDistribution" = "" ]
then
  echo "Cloud Front Distribution not configured, please insert distribution name in package.json"
  exit 100
else

    echo "Complete"
fi