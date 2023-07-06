#!/bin/sh

connect_host="$1"

if [[ -z "$connect_host" ]]; then
    executable=`basename $0`
    echo "usage: ./$executable http://connect_host:connect_port"
    exit 0
fi

files="*.json"
for f in $files
do
    current="${f%.json}"
    echo "UPLOADING: $current"
    curl -s -X POST -H "Content-Type: application/json" -d @$f $connect_host/connectors --output /dev/null
    sleep 5
done

curl -s -X GET $connect_host/connectors
