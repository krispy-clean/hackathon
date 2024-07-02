import { Elysia } from "elysia"
import userRouter from "./user"

const router = new Elysia({
  prefix: "/api"
})

router.use(userRouter)

export default router
