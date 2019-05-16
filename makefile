ifndef BUILD_GROUP
	BUILD_GROUP="template"
endif

ifndef BUILD_NUMBER
	BUILD_NUMBER="1.0.0"
endif

ifndef BRANCH
	BRANCH=$(git symbolic-ref -q HEAD)
	BRANCH=${BRANCH##refs/heads/}
	BRANCH=${BRANCH:-HEAD}
endif

ifndef HASH
	HASH=$(git rev-parse HEAD)
endif

ifndef BUILD_USER
	BUILD_USER=$(git --no-pager show -s --format='<mailto:%ae|%an>' $HASH)
endif

.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

docker-build:
	docker-compose -f docker-compose.yml build

docker-dev:
	cd application && npm install
	make docker-build

docker-up:
	docker-compose -f docker-compose.yml up -d

docker-test:
	docker-compose -f docker-compose.yml up -d
	docker exec -ti `docker ps -a | grep template | awk '{ print $$1 }'` /bin/sh -c "npm test"

docker-clean:
	@echo 'stopping docker containers'
	@docker stop `docker ps -aq`
	@echo 'removing all node containers'
	@docker ps -a | awk '{ print $$1,$$2 }' | grep template | awk '{ print $$1 }' | xargs -I {} docker rm {}

docker-deep-clean:
	-docker stop `docker ps -aq`
	-docker rm `docker ps -aq`
	-docker rmi `docker images -qf dangling=true`
	-docker volume rm `docker volume ls -qf dangling=true`
	-docker rmi `docker images --format '{{.Repository}}:{{.Tag}}' | grep "template/"` -f

docker-stop:
	@echo 'stopping template api container'
	@docker ps -a | awk '{ print $$1,$$2 }' | grep template/template-api | awk '{ print $$1 }' | xargs -I {} docker stop {}


