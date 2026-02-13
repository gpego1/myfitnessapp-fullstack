import BaseError from "./BaseError.js";

export default class InvalidReq extends BaseError{
    constructor(message = "One or more requisitions are wrong") {
        super(message, 400);
    }
}