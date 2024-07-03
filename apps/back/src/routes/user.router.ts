import { Elysia } from "elysia";
import getUsers from "../controllers/users/getUsers";
import createUser from "../controllers/users/createUser";

const userRouter = new Elysia({ prefix: "/users" });

userRouter.get("", getUsers);
userRouter.post("", createUser);

export default userRouter;
