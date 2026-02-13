import NotFound from "../errors/NotFound.js"

function notFoundEntityMiddleware(req, res, next) {
    const error = new NotFound();
    next(error);
}

export default notFoundEntityMiddleware;