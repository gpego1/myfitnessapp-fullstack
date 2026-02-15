import { workoutLog } from "../model/index.js";
import NotFound from "../errors/NotFound.js";

export default class WorkoutLogService {
    static async create(data) {
        const { user, workout } = data;

        const exists = workoutLog.findOne({ user, workout });

        if (exists) {
            return await workoutLog.create(data);
        } else {
            throw new NotFound("Cannot find workout or user");
        }
    }

    static async history(userId) {
        const result = await workoutLog
        .find({ user: userId })
        .populate("workout")
        .select("-user")

        if (!result.length) return [];

        return {
            userId,
            workouts: result.map(log => ({
                workout: log.workout,
                duration: log.duration,
                caloriesBurned: log.caloiresBurned,
                completedAt: log.completedAt
            }))
        };
    }
}