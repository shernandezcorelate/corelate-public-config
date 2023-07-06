Quick Start Guide
==========================

### Things you need to install

* JDK 1.8 or above
* Maven 3.2.0 or above
* Git
* IDE of your choice
* Postgres
* Java Cryptography Extension (JCE) Unlimited Strength

## Setup

1. Clone project using `git clone git@gitlab.exist.com:beacon/corelate-config.git`  
2. Run using `mvn spring-boot:run`
3. Verify service working on port 8001

## Guidelines

1. Make sure that all confidential data that should be posted as a configuration should be encrypted (See encryption guideline below)
2. Make sure that the same key is being used on encryption and decryption of data

## Encrypt data

1. Use the command `curl --user corelate:123qwe [domain]:8001/encrypt -d [message]`
2. Copy the generated hash and store on the application.yml with the format '[property key] : {cipher}[hashkey]'

## Decrypt data

1. Use the command `curl --user corelate:123qwe [domain]:8001/decrypt -d [hashkey]`

## References

1. [Java Cryptography Extension (JCE) Unlimited Strength](http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html)