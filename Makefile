FRONTEND_PATH = $(PWD)/front
BACKEND_PATH = $(PWD)/back
FRONTEND_CONTAINER_NAME = front
BACKEND_CONTAINER_NAME = back
DATABASE_CONTAINER_NAME = mongo

default: commands

build: test
	@if [ -d "$(FRONTEND_PATH)" ]; then cd $(FRONTEND_PATH) && bun run build; fi
	@if [ -d "$(BACKEND_PATH)" ]; then cd $(FRONTEND_PATH) && bun run build; fi

up:
	@docker compose up --build -d
	@echo "Containers started"

dev:
	@docker compose -f docker-compose.yml -f docker-compose-dev.yml up --build -d
	@echo "Dev containers started"

down:
	@docker compose down
	@echo "Containers stopped and deleted"

stop:
	@docker compose stop
	@echo "Containers stopped"

start:
	@docker compose start
	@echo "All the containers are started"

restart:
	@docker compose restart
	@echo "Containers restarted"

start-front:
	@docker compose start $(FRONTEND_CONTAINER_NAME)
	@echo "Started frontend"

stop-front:
	@docker compose stop $(FRONTEND_CONTAINER_NAME)
	@echo "Stopped frontend"

restart-front:
	@docker compose restart $(FRONTEND_CONTAINER_NAME)
	@echo "Restarted frontend"

start-back:
	@docker compose start $(BACKEND_CONTAINER_NAME)
	@echo "Started backend"

stop-back:
	@docker compose stop $(BACKEND_CONTAINER_NAME)
	@echo "Stopped backend"

restart-back:
	@docker compose restart $(BACKEND_CONTAINER_NAME)
	@echo "Restarted backend"

start-db:
	@docker compose start $(DATABASE_CONTAINER_NAME)
	@echo "Started backend"

stop-db:
	@docker compose stop $(DATABASE_CONTAINER_NAME)
	@echo "Stopped database"

restart-db:
	@docker compose restart $(DATABASE_CONTAINER_NAME)
	@echo "Restarted database"

# You need to have bun installed to make it worked
ci:
	@echo "Running the same commands as the CI. Let's check the backend first"
	@cd back && bun run format-check && bun run lint
	@echo "Everything is fine for the backend. Let's test the frontend"
	@cd front && bun run format-check && bun run lint
	@echo "Everything you can commit now"

prettier-fix:
	@echo "You had some prettier issues let's fix it!"
	@cd front && bun run format-fix
	@cd back && bunx prettier . -w
	@echo "Your prettier issues are fixed!"

pf:
	@make prettier-fix

commands:
	@echo " List of every command"
	@echo "	- commands: shows this messages"
	@echo "	- test: runs the test. It can be used in frontend or backend"
	@echo "	- run: test the code and runs it. It can be used in frontend or backend"
	@echo "	- up: create and start all containers"
	@echo "	- dev: create and start all containers in dev mode"
	@echo "	- down: stop and delete all the containers"
	@echo "	- start: starts all containers "
	@echo "	- stop: stop all the containers"
	@echo "	- restart: restart all the containers"
	@echo "	- start-[front || back || db] start the selected container"
	@echo "	- stop-[front || back || db] stop the selected container"
	@echo "	- restart-[front || back || db] restart the selected container"
	@echo "\n To use those commands run make [name of the command]"