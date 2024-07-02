import { Elysia } from "elysia";
import userRouter from "./user.router";

const mainRouter = new Elysia({
  prefix: "/api",
});

mainRouter.use(userRouter);

export default mainRouter;
