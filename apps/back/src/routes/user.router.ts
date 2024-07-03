import { Elysia } from "elysia";
import createUser from "../controllers/users/createUser";
import getUsers from "../controllers/users/getUsers";

const userRouter = new Elysia({ prefix: "/users" })
  .get("/", getUsers)
  .post("/", createUser);

export default userRouter;
