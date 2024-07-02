import dotenv from "dotenv"
import { fileURLToPath } from "url"
import { dirname } from "path"

const filename = fileURLToPath(import.meta.url)
const dirName = dirname(filename)

dotenv.config({ path: `${dirName}/../../.env` })

export const { env } = process
