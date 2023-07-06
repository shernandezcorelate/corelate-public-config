Quick Start Guide
==========================

### Things you need to install

* JDK 1.8 or above
* Maven 3.2.0 or above
* Git
* IDE of your choice
* Postgres

## Setup

1. Clone project using `git clone git@gitlab.exist.com:beacon/corelate-user.git`
2. Create Postgres Database (see credentials below)
3. Build project on root project directory using `mvn clean install`
4. Run using `mvn spring-boot:run` on [project_directory]/corelate-user-app
5. Verify service working on port 8082

## Postgres Configuration

* Version : 9.5+
* Schema Name : isv_corelate_user
* Username : postgres
* Password : postgres

## HTTP verbs

Verb | Usage
--- | ---
`GET` | Used to retrieve a resource
`POST` | Used to create a new resource
`PUT` | Used to update an existing resource, including partial update
`DELETE` | Used to delete an existing resource

## Endpoint Guidelines

1. All endpoints by default would be private
2. Endpoint header should follow the name of the Resource

Resource Name | header | sample
--- | --- | ---
UserResource.class | `/user` | **/user/****

4. CRUD Endpoints should follow RequestMethod Type below 

Action | RequestMethod | Sample Endpoint | Path Variable/s | Parameter
--- | --- | --- | --- | ---
Fetch Single Entity | `GET` | **/header/{id}** | id | none
Fetch Multiple Entity | `GET` | **/header** | none | none
Fetch Multiple Entity w/ Filter | `GET` | **/header** | none | [Object object]
Create Entity | `POST` | **/header** | none | [Object object]
Update Entity | `PUT` | **/header/{id}** | id | [Object object]
Delete Entity | `DELETE` | **/header/{id}** | id | none

## References

1. [Spring Rest Docs Guide](http://docs.spring.io/spring-restdocs/docs/current/reference/html5/)