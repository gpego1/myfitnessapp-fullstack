import mongoose from "mongoose";
import InvalidReq from "../errors/IvalidReq.js";
import ValidationError from "../errors/ValidationError.js";
import BaseError from "../errors/BaseError.js";

function errorHanlder(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        new InvalidReq().sendResponse(res);
    } else if (error instanceof mongoose.Error.ValidationError) {
        new ValidationError(error).sendResponse(res);
    } else if (error instanceof BaseError) {
        error.sendResponse(res);
    } else {
        new BaseError().sendResponse(res);
    }
}
export default errorHanlder;