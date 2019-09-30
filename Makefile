.PHONY: help
DOCKER_DEV_COMPOSE_FILE :=docker-compose.yml
 

## Start local development server containers
start:
	@echo "Creating mongo/redis volume"
	@ docker volume create --name=mongo_data
	@ docker volume create --name=redis_data
	@ echo "  "
	@ echo "Building required docker images"
	@ docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) build app
	@ echo "Build Completed successfully"
	@ echo " "
	@ echo "Starting local development server"
	@ docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) up

