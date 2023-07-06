Quick Start Guide
==========================

### Things you need to install

* JDK 1.8 or above
* Maven 3.2.0 or above
* Git
* IDE of your choice
* Postgres
* Redis
* Minio

## Setup

1. Clone project using `git clone git@gitlab.exist.com:beacon/corelate-cms.git`
2. Create Postgres Database (see credentials below)
3. Configure Minio (see credentials below)
4. Build project on root project directory using `mvn clean install`
5. Run using `mvn spring-boot:run` on [project_directory]/corelate-cms-app
6. Verify service working on port 8082

## Postgres Configuration

* Version : 9.5+
* Schema Name : isv_corelate_cms
* Username : postgres
* Password : postgres

## Minio Configuration

* Access Key : VV2V7IK1NOEY636AGLKO
* Secret Key : iUlGKax02hsgClCLPCpy50DpD6ltW1kOV4pYcT2A
* Bucket Name : isv-corelate-cms-storage

## Module Guidelines

Module | Usage
--- | ---
Domain | Primary use is to store POJOs (models, dto, reference data)
Service | Stores business rules, processes, calculations and database storage
Client | Stores the interface endpoints which would be used by other systems within the ecosystem
App | Runnable component which manage configurations and endpoints

## Endpoint Guidelines

1. All endpoints by default would be private
2. Endpoint header should follow the name of the Resource
3. Endpoints which would be used by other systems should have a representation interface on the client module. Otherwise, no need for API interfaces

Resource Name | header | sample
--- | --- | ---
UserResource.class | `/user` | **/user/****

4. CRUD Endpoints should follow RequestMethod Type below 

Action | RequestMethod | Sample Endpoint | Path Variable/s | Parameter
--- | --- | --- | --- | ---
Fetch Single Entity | `GET` | **/endpoint/header/{id}** | id | none
Fetch Multiple Entity | `GET` | **/endpoint/header** | none | none
Fetch Multiple Entity w/ Filter | `GET` | **/endpoint/header** | none | [Object object]
Create Entity | `POST` | **/endpoint/header** | none | [Object object]
Update Entity | `PUT` | **/endpoint/header/{id}** | id | [Object object]
Delete Entity | `DELETE` | **/endpoint/header/{id}** | id | none


## References

1. [Minio Quickstart Guide](https://github.com/minio/minio/tree/master/docs/docker)
2. [Spring Rest Docs Guide](http://docs.spring.io/spring-restdocs/docs/current/reference/html5/)