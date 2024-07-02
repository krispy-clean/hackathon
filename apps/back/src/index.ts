import { Elysia } from "elysia";

const hostname = process.env.BACKEND_HOSTNAME;
const port = process.env.BACKEND_PORT;

if (!hostname || !port) {
  throw new Error("BACKEND_PORT and BACKEND_HOSTNAME must be set");
}

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .listen({ hostname, port }, ({ hostname, port }) => {
    console.log(`Running at http://${hostname}:${port}`);
  });

export type App = typeof app;
