import { Elysia } from "elysia";
import mainRouter from "./routes/main.router";
import config from "./utils/config";

const { port, hostname, protocol } = config;

const app = new Elysia()
  .use(mainRouter)
  .listen({ hostname, port }, ({ hostname, port }) => {
    console.log(`Running at ${protocol}://${hostname}:${port}`);
  });

export type App = typeof app;
