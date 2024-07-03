import yup, { ValidationError } from "yup";
import { requiredNumber, requiredString } from "./schemas";
import InvalidConfigError from "../errors/InvalidConfigError";

const configSchema = yup.object({
  api: yup.object({
    port: requiredNumber,
    hostname: requiredString,
    protocol: requiredString,
  }),
  auth: yup.object({
    saltLength: requiredNumber,
    iterationsNumber: requiredNumber,
    keyLength: requiredNumber,
  }),
  db: yup.object({
    uri: requiredString,
  }),
});

export type Config = yup.InferType<typeof configSchema>;
let config = {};

try {
  config = await configSchema.validate({
    api: {
      port: process.env.API__PORT,
      hostname: process.env.API__HOSTNAME,
      protocol: process.env.API__PROTOCOL,
    },
    auth: {
      saltLength: process.env.AUTH__SALT_LENGTH,
      iterationsNumber: process.env.AUTH__ITERATIONS_NUMBER,
      keyLength: process.env.AUTH__KEY_LENGTH,
    },
    db: {
      uri: process.env.DB__URI,
    },
  });
} catch (error) {
  if (error instanceof ValidationError) {
    throw new InvalidConfigError(error.errors);
  }
  throw error;
}

export default config as Config;
