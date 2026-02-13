import InvalidReq from "./IvalidReq.js";

export default class ValidationError extends InvalidReq{
    constructor(error) {
        const errorMessage = Object.values(error.errors)
            .map(error => error.message)
            .join("; ");
        super(`Founded errors: ${errorMessage}`)
    }
}