import { User, meals } from "../model/index.js";
import NotFound from "../errors/NotFound.js";

export default class UserGoalService {

    static async updateGoals(userId, goals) {
        const user = await User.findById(userId);
        if(!user) throw new NotFound("Cannot find user.");

        Object.assign(user, goals);
        return await user.save();
    }

    static async dailyProgress(userId, date) {
        const user = await User.findById(userId);

        if(!user) throw new NotFound("User not found.");

        const start = new Date(date);
        start.setHours(0,0,0,0);

        const end = new Date(date);
        end.setHours(23,59,59,999);

        const mealsDay = await meals.find({
            user: userId,
            date: { $gte: start, $lte: end }
        });

        const totals = mealsDay.reduce((acc, meals) => {
            acc.calories += meals.calories;
            acc.protein += meals.protein;
            acc.carbs += meals.carbs;
            acc.fat += meals.fat;
            return acc;
        }, {calories: 0, protein: 0, carbs: 0, fat: 0});

        return {
            consumed: totals,
            goals: {
                calories: user.dailyCaloriesGoal,
                protein: user.dailyProteinGoal,
                carbs: user.dailyCarbsGoal,
                fat: user.dailyFatGoal
            },
            remaining: {
                calories: user.dailyCaloriesGoal - totals.calories,
                protein: user.dailyProteinGoal - totals.protein,
                carbs: user.dailyCarbsGoal - totals.carbs,
                fat: user.dailyFatGoal - totals.fat
            },
            percentage: {
                calories: Math.round((totals.calories / user.dailyCaloriesGoal) * 100)
            }
        };
    }
}