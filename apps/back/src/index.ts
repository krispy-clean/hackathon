import {Elysia} from "elysia";
import config from "./utils/config";
import mainRouter from "./routes/main.router";


const {port,hostname,protocol} = config;
const app = new Elysia()
    .use(mainRouter)
    .listen({ hostname , port }, ({ hostname, port }) => {
        console.log(`Running at ${protocol}://${hostname}:${port}`);
    });

export type App = typeof app;
