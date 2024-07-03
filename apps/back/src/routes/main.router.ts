import { Elysia } from "elysia";
import userRouter from "./user.router";

const mainRouter = new Elysia().use(userRouter);

export default mainRouter;
