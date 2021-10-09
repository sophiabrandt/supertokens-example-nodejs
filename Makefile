SHELL := /bin/bash

export PROJECT = supertokens-example-nodejs

# ==============================================================================
# Development

run: up

up:
	docker compose up -d

dcup:
	docker compose up

dcdown:
	docker compose down -v --remove-orphans

.PHONY: pretty
pretty:
	pnpm run lint && pnpm run format
