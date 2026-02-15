import UserGoalService from "../services/UserGoalService.js";

export class UserGoalController {

    static async update(req, res, next) {
        try {
            const result = await UserGoalService.updateGoals(req.params.userId, req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async progress(req, res, next) {
        try {
            const result = await UserGoalService.dailyProgress(
                req.params.userId,
                req.query.date
            );
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}