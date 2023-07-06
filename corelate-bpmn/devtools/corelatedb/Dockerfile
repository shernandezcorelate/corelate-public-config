FROM postgres:9.6-alpine

ADD init-user-db.sh /docker-entrypoint-initdb.d
RUN chmod 755 /docker-entrypoint-initdb.d/init-user-db.sh
