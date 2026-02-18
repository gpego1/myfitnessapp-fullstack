import NotFound from "../errors/NotFound.js";
import { workoutLog } from "../model/index.js";
import WorkoutLogService from "../services/WorkoutLogService.js";

export class WorkoutLogController {

    static async getWorkoutLogByUserIdOrWorkoutExercisesId(req, res, next) {
        try {
            const filters = [];
            const userId = req.userId;
            const { workoutExercisesId } = req.query;

            if (!userId || !workoutExercisesId) {
                throw new NotFound("Could not find user or workout");
            }
            
            if (userId) filters.push({ user: userId })
            if (workoutExercisesId) {
                filters.push({
                    workoutExercisesId: { $in: [workoutExercisesId] }
                });
            }
            const result = await workoutLog
            .find({ $or: filters })
            .populate("user")
            .populate("workoutExercises");
            return res.status(200).json(result);
        } catch(error) {
            next(error);
        }
    }

    static async createWorkoutLog(req, res, next) {
        try {
            const result = await WorkoutLogService.create(req.body);
            res.status(201).json(result);
        } catch(error) {
            next(error);
        }
    }

    static async history(req, res, next) {
        try {
            const result = await WorkoutLogService.history(req.userId);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}