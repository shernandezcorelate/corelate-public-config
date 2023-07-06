#!/bin/sh
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL

    CREATE DATABASE isv_corelate_bpmn;
    CREATE DATABASE isv_corelate_dw;

EOSQL
