FROM oven/bun as base
WORKDIR /app

COPY . .
RUN  bun install

## Dev Env
FROM base as dev
WORKDIR /app
CMD ["bun", "run", "dev"]

