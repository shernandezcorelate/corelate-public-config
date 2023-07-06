Quick Start Guide
==========================

### Things you need to install

* JDK 1.8 or above
* Maven 3.2.0 or above
* Git
* IDE of your choice
* Postgres

## Setup

1. Clone project using `git clone git@gitlab.exist.com:beacon/corelate-authentication.git`
2. Create Postgres Database (see credentials below)
3. Build project on root project directory using `mvn clean install`
4. Run using `mvn spring-boot:run` on root project directory
5. Verify service working on port 8004

## Postgres Configuration

* Version : 9.5+
* Schema Name : isv_corelate_authentication
* Username : postgres
* Password : postgres

## Default System Credentials

Username | Password | Grant Type | Auto Approve
--- | --- | --- | ---
corelate_password_client | 123qwe | `password,authorization_code,refresh_token` | **true** 
corelate_implicit_client |  | `implicit` | **true** 

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
Fetch Single Entity | `GET` | **/header/{id}** | id | none
Fetch Multiple Entity | `GET` | **/header** | none | none
Fetch Multiple Entity w/ Filter | `GET` | **/header** | none | [Object object]
Create Entity | `POST` | **/header** | none | [Object object]
Update Entity | `PUT` | **/header/{id}** | id | [Object object]
Delete Entity | `DELETE` | **/header/{id}** | id | none


## References

1. [Spring Rest Docs Guide](http://docs.spring.io/spring-restdocs/docs/current/reference/html5/)