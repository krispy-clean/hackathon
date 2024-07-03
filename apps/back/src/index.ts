import {Elysia} from "elysia";
import mainRouter from "./routes/main.router";
import config from "./utils/config";
import * as mongoose from "mongoose";

const {
  api: { port, hostname, protocol },
  db: { uri },
} = config;

await mongoose.connect(uri);

const app = new Elysia()
  .use(mainRouter)
  .listen({ hostname, port }, ({ hostname, port }) => {
      // eslint-disable-next-line no-console
    console.log(`Running at ${protocol}://${hostname}:${port}`);
  });

export type App = typeof app;
