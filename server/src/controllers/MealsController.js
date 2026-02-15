import NotFound from "../errors/NotFound.js";
import { meals } from "../model/index.js";

export class MealsController {

    static async findMealByUserId(req, res, next) {
        try {
            const { userId } = req.query;
            
            if (userId) {
                const result = await meals.find({
                user: userId
             });
              res.status(200).json(result);
           } else {
            throw new NotFound("Cannot found user");
           }
        } catch(error) {
            next(error);
        }
    }

    static async createMeal(req, res, next){
        try {
            const result = await meals.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
}