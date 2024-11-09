export class ServerException extends Error {
    constructor() {
        super("Algo salió mal");
    }
}