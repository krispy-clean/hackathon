import { randomBytes } from "node:crypto";
import config from "../config";

const generateSalt = () => randomBytes(config.auth.saltLength).toString("hex");

export default generateSalt;
