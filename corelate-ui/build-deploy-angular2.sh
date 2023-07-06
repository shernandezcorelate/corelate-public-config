#!/bin/bash

export CORELATE_UI_HOME=$(pwd)

cd corelate-ui-app

npm install

if [ -z "$1" ]
then
    echo 'Running default configuration'
    ng build
else
    echo 'Running with configuration' ${1}
    node --max_old_space_size=8192 ./node_modules/@angular/cli/bin/ng build --env=${1} --prod
fi

mv dist/* $CORELATE_UI_HOME/src/main/resources/static
