import * as yup from "yup";
import {ValidationError} from "yup";
import {requiredNumber, requiredString} from "./schemas";

const configSchema =yup.object({
    port: requiredNumber,
    hostname: requiredString,
    protocol: requiredString,
})

export type Config = yup.InferType<typeof configSchema>;
let config = {}

try {
    config = configSchema.validate({
        port:process.env.BACKEND_PORT,
        hostname:process.env.BACKEND_HOSTNAME,
        protocol:process.env.BACKEND_PROTOCOL,
    })
}catch (error) {
    if (error instanceof ValidationError) {
        throw new InvalidConfigError(error.errors);
    }
    throw error;
}

export default config as Config;
