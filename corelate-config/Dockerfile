FROM openjdk:8-jre-alpine
ARG APP_PORT
EXPOSE $APP_PORT
ADD target/corelate-config-server-app.jar /usr/share/corelate/app.jar
ENTRYPOINT ["sh", "-c", "java -server -jar /usr/share/corelate/app.jar"]