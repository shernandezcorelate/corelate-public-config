Quick Start Guide
==========================

### Things you need to install

* JDK 1.8 or above
* Maven 3.2.0 or above
* Git
* IDE of your choice
* Postgres
* Redis

## Setup

1. Clone project using `git clone git@gitlab.exist.com:beacon/corelate-workflow.git`
2. Create Postgres Database (see credentials below)
3. Build project on root project directory using `mvn clean install`
4. Run using `mvn spring-boot:run` on [project_directory]/corelate-workflow-app
5. Verify service working on port 8083

## Postgres Configuration

* Version : 9.5+
* Schema Name : isv_corelate_workflow
* Username : postgres

## BPMN Configuration
* Username: admin@isv.corelate.net
* Password : 123qwe

## Endpoint Guidelines

1. All endpoints by default would be private
2. Endpoint header should follow the name of the Resource

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

