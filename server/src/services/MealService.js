import { meals } from "../model/index.js";
import NotFound from "../errors/NotFound.js";

export default class MealService {

    static calculateCalories(protein, carbs, fat) {
        return (protein * 4) + (carbs * 4) + (fat * 9);
    }

    static async createMeal(data) {
        const { user, protein, carbs, fat, date } = data;

        const exists = await meals.findOne({user, date});

        if (exists) throw new NotFound("Meal already registered");

        const calories = this.calculateCalories(protein, carbs, fat);

        return await meals.create({
            user,
            protein,
            carbs,
            fat,
            calories,
            date
        });
    }

    static async getDayliSummary(userId, date) {
        const start = new Date(date);
        start.setHours(0,0,0,0);

        const end = new Date(date);
        end.setHours(23,59,59,99);

        const mealsList = await meals.find({
            user: userId,
            date: { $gte: start, $lte: end }
        });

        if (!meals.length) throw new NotFound("No meals found.");

        return mealsList.reduce((acc, meal) => {
            acc.calories += meal.calories;
            acc.protein += meal.protein;
            acc.carbs += meal.carbs;
            acc.fat = meals.fat;
            return acc;
        }, {
            calories: 0,
            protein: 0,
            carbs: 0,
            date: 0
        });
    }
}