import NotFound from "../errors/NotFound.js";
import { User, workoutExercises, workoutLog, meals } from "../model/index.js";
import UserGoalService from "./UserGoalService.js"

export default class DashboardService {

    static async generateDashboard(userId, date = new Date()) {
        const user = await User.findById(userId);
        if (!user ) throw new NotFound("User not found.");

        const dailyProgress = await UserGoalService.dailyProgress(userId, date);
        const logs = await workoutLog.find({user: userId}).populate("workout");

        const completedWorkout = logs.length;

        const workoutItems = logs.map(log => log.workout._id);
        const exercises = await workoutExercises.find({ workout: { $in: workoutItems } })
            .populate("exercise")
            .populate("workout")
            .sort({ order: 1 });
        
        const workoutPlan = {};
        exercises.forEach(we => {
            const title = we.workout.title;
            if (!workoutPlan[title]) {
                workoutPlan[title] = {
                    workoutId: we.workout._id,
                    dayOfWeek: we.workout.dayOfWeek,
                    level: we.workout.level,
                    muscleGroup: we.workout.muscleGroup,
                    description: we.workout.description,
                    exercises: []
                };
            }
            workoutPlan[title].exercises.push({
                name: we.exercise.name,
                sets: we.sets,
                load: we.load,
                order: we.order
            });
        });

        // Meal plans 
        const mealsPlan = await meals.find({ user: userId })
            .sort({ date: 1 })
            .limit(4);

        const mealPlan = mealsPlan.map(m => ({
            name: m.name,
            calories: m.calories,
            protein: m.protein,
            carbs: m.carbs,
            fat: m.fat
        }));

        return {
            goal: user.goal,
            progress: {
                calories: dailyProgress.consumed.calories,
                caloriesGoal: user.dailyCaloriesGoal,
                protein: dailyProgress.consumed.protein,
                carbs: dailyProgress.consumed.carbs,
                fat: dailyProgress.consumed.fat,
                completedWorkout,
                workoutsTotal: Object.keys(workoutPlan).length,
                remaining: dailyProgress.remaining,
                percentage: dailyProgress.percentage
            },
            workoutPlan: Object.values(workoutPlan),
            mealPlan
        };
    }
}