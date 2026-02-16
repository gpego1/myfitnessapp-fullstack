import { meals, workoutLog } from "../model/index.js";
import DashboardService from "../services/DashboardService.js";

export class DashboardController {
    static async getDashboard(req, res) {
        try {
            const userId = req.userId;

            const logs = await workoutLog.find({ user: userId })
            const userMeals = await meals.find({ user: userId }).limit(1);

            if(logs.length === 0 || userMeals.length === 0) {
                await DashboardService.generateWorkoutAndMealsForUser(userId);
            }

            const dashboard = await DashboardService.generateDashboard(userId);
            res.status(200).json(dashboard);
        } catch (error) {
           res.status(500).json(error.message)
        }
    }
}