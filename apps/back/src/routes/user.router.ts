import {Elysia} from "elysia";
import getUsers from "../controllers/users/getUsers";

const userRouter = new Elysia({prefix:"/users"})

userRouter.get("",getUsers)

export default userRouter