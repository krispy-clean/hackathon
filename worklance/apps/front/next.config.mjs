import { env } from "./loadEnv.mjs"

const nextConfig = {
  env: {
    BACKEND_PORT: env.BACKEND_PORT,
    FRONTEND_PORT: env.FRONTEND_PORT,
    BACKEND_HOSTNAME: env.BACKEND_HOSTNAME,
    PROTOCOL: env.PROTOCOL
  }
}

export default nextConfig
