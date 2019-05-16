# Node Typescript Boilerplate
[![Build Status](https://travis-ci.org/PrismaPhonic/Node-Typescript-Boilerplate.svg?branch=master)](https://travis-ci.org/PrismaPhonic/Node-Typescript-Boilerplate)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

## Introduction
This project seeks to provide you with a boilerplate for starting typescript based node projects.  It includes some folder setup with abstract base classes and interfaces for a DDD style application.  
It also includes a `Dockerfile`, `docker-compose.yml` file, and base `travis.yml` file

## Setup

The first thing you'll want to do is go into `docker-compose.yml` and replace all instances of `template` with the name of your application.
Also do this in the `makefile` to match all the names you've used in your `docker-compose.yml` file.

If you are in development just run `make docker-dev`.  This will first locally
install npm modules for the project so you get full IDE support, and then it
will build the docker container for the project.

If you only want to build the docker container for the project, simply run `make docker-build` from the root directory.  For now there is no web api layer for endpoint testing, or manual interaction with the application. 

## Tests

You can run tests by running `make docker-test` from the root directory.  This
will run all tests from inside of the docker container that got built in the
setup step above.

## Cleaning up Containers

If you need to clean up your containers, just run `make docker-clean`.  If you would like to deep clean all of your docker images you can use `make docker-deep-clean`.
