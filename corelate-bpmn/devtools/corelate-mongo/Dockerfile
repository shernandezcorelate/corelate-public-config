FROM mongo:3

ADD initrs.js /docker-entrypoint-initdb.d/initrs.js
CMD ["mongod", "--replSet", "corelate-mongo"]
