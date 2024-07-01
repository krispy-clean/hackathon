FROM oven/bun as base
WORKDIR /app

COPY . .
RUN  bun install

FROM base as dev
WORKDIR /app

RUN bunx next telemetry disable

CMD ["bun", "run", "dev"]

