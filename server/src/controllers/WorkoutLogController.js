import NotFound from "../errors/NotFound.js";
import { workoutLog } from "../model/index.js";
import WorkoutLogService from "../services/WorkoutLogService.js";

export class WorkoutLogController {

    static async getWorkoutLogByUserIdAndWorkoutExercisesId(req, res, next) {
        try {
            const { userId, workoutExercisesId } = req.query;

            if (!userId || !weId) {
                throw new NotFound("Could not found user or workout");
            }

            const result = await workoutLog
            .find({
                user: userId, 
                workoutExercises: workoutExercisesId
            })
            .populate("user")
            .populate("workoutExercises");

            res.status(200).json(result);
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