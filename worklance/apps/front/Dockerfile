# Use an appropriate base image
FROM oven/bun as base
WORKDIR /app/front

# Copy the rest of the application code && install deps
COPY . .
RUN bun install

WORKDIR /app/front
RUN bunx next telemetry disable
CMD ["bun", "run", "dev"]
CMD ["tail", "-f", "/dev/null"]