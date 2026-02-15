import MealService from "../services/MealService.js";

export class MealsController {

    static async createMeal(req, res, next){
        try {
            const result = await MealService.createMeal(req.body);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async getDailySummary(req, res, next) {
        try {
            const { userId } = req.params;
            const { date } = req.query;

            const result = await MealService.getDayliSummary(userId, date);
            res.status(200).json(result);
        } catch(error) {
            next(error);
        }
    }
}