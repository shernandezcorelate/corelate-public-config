Quick Start Guide
==========================

### Things you need to install

* JDK 1.8 or above
* Maven 3.2.0 or above
* Git
* IDE of your choice
* Postgres
* Minio
* Docker and Docker Compose [Optional]

## Setup

1. Clone project using `git clone git@gitlab.exist.com:beacon/corelate-rules.git`
2. Create Postgres Database (see credentials below)
3. Build project on root project directory using `mvn clean install`
4. Run using `mvn spring-boot:run` on [project_directory]/corelate-rules-app
5. Verify service working on port 8085

## Postgres Configuration

* Version : 9.5+
* Schema Name : isv_corelate_rules
* Username : postgres
* Password : postgres

## Minio Configuration

* Access Key : VV2V7IK1NOEY636AGLKO
* Secret Key : iUlGKax02hsgClCLPCpy50DpD6ltW1kOV4pYcT2A
* Bucket Name : isv-corelate-rules-storage

## Docker Setup [Optional]
1. Go to the project root directory
2. Execute `docker-compose up -d`
3. Verify docker services are running by executing `docker ps`  
    You should see something like this:  
    
    ```sh
    CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS                   PORTS                    NAMES
    0f391048d911        postgres:9.5-alpine   "docker-entrypoint..."   4 minutes ago       Up 4 minutes             0.0.0.0:5432->5432/tcp   corelaterules_db_1
    c39157cab9c1        minio/minio           "/usr/bin/docker-e..."   4 minutes ago       Up 4 minutes (healthy)   0.0.0.0:9000->9000/tcp   corelaterules_minio-server_1
    ```
    

## Endpoint Guidelines

1. All endpoints by default would be private
2. Endpoint header should follow the name of the Resource

Resource Name | header | sample
--- | --- | ---
UserResource.class | `/user` | **/user/****

3. CRUD Endpoints should follow RequestMethod Type below 

Action | RequestMethod | Sample Endpoint | Path Variable/s | Parameter
--- | --- | --- | --- | ---
Fetch Single Entity | `GET` | **/header/{id}** | id | none
Fetch Multiple Entity | `GET` | **/header** | none | none
Fetch Multiple Entity w/ Filter | `GET` | **/header** | none | [Object object]
Create Entity | `POST` | **/header** | none | [Object object]
Update Entity | `PUT` | **/header/{id}** | id | [Object object]
Delete Entity | `DELETE` | **/header/{id}** | id | none

## References

1. [Minio Quickstart Guide](https://github.com/minio/minio/tree/master/docs/docker)
2. [Spring Rest Docs Guide](http://docs.spring.io/spring-restdocs/docs/current/reference/html5/)