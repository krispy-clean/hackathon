import CriticalError from "./CriticalError";

export default class InvalidConfigError extends CriticalError {
  constructor(fields: string[]) {
    super(`MISSING VALUES FOR ${fields.join("\n\t")}`);
  }
}
