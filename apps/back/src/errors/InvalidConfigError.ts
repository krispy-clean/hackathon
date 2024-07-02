class InvalidConfigError extends CriticalError  {
    constructor(fields:string[]) {
        super(`MISSING VALUES FOR ${fields.join("\n\t")}`);
    }
}