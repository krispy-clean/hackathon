import { pbkdf2 } from "node:crypto";
import { promisify } from "node:util";
import config from "../config";

const pbkdf2Async = promisify(pbkdf2);

const hashPassword = async (password: string, salt: string) =>
  (
    await pbkdf2Async(
      password,
      salt,
      config.auth.iterationsNumber,
      config.auth.keyLength,
      "sha512",
    )
  ).toString("hex");

export default hashPassword;
