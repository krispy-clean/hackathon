export default class CriticalError extends Error {
    constructor(message: string) {
        super();
        this.message = message;
        // eslint-disable-next-line no-console
        console.error(this.message);
        process.exit(1);
    }
}