import { edenTreaty } from "@elysiajs/eden"
import { App } from "../../apps/back/src"

const port = process.env.BACKEND_PORT
const hostname = process.env.BACKEND_HOSTNAME

if (port === undefined || hostname === undefined) {
  throw new Error("BACKEND_PORT and BACKEND_HOSTNAME must be set")
}

export const api = edenTreaty<App>(`http://${hostname}:${port}`)
