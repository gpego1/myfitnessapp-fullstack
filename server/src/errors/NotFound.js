import BaseError from "./BaseError.js";

export default class NotFound extends BaseError{
    constructor(message = 'Page not found') {
        super(message, 404);
    }
}