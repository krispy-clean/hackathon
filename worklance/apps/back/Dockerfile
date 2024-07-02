FROM oven/bun as base
WORKDIR /app/back

# Copy the rest of the application code && install deps
COPY . .
RUN bun install

WORKDIR /app/back
CMD ["bun", "run", "src/index.ts"]
CMD ["tail", "-f", "/dev/null"]