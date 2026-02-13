import InvalidReq from "../errors/IvalidReq.js";

async function paginate(req, res, next) {
    try {
        let { limit = 5, page = 1, sort = "_id:-1" } = req.query;

        limit = parseInt(limit);
        page = parseInt(page);
        sort = parseInt(sort);

        const result = req.result;

        if (limit > 0 && page > 0) {
            const paginateResult = await result.find()
            .sort({ [orderField]: sort })
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();
         res.status(200).json(paginateResult);
        } else {
            next (new InvalidReq())
        }
    } catch (error) {
        next(error);
    }
}
export default paginate;