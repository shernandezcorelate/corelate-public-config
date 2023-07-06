FROM tomcat:7-jre8-alpine
EXPOSE 8080
RUN ["mv", "/usr/local/tomcat/webapps", "/usr/local/tomcat/webapps2"]
ADD target/corelate-bpmn-app.war /usr/local/tomcat/webapps/ROOT.war
CMD ["catalina.sh", "run"]