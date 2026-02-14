import NotFound from "../errors/NotFound.js";
import { workoutLog } from "../model/index.js";

export class WorkoutLogController {

    static async getWorkoutLogByUserIdAndWorkoutId(req, res, next) {
        try {
            const { userId, workoutId } = req.query;

            if (!userId || !workoutId) {
                throw new NotFound("Could not found user or workout");
            }

            const result = await workoutLog
            .find({
                user: userId, 
                workout: workoutId 
            })
            .populate("user")
            .populate("workout");

            res.status(200).json(result);
        } catch(error) {
            next(error);
        }
    }

    static async createWorkoutLog(req, res, next) {
        try {
            const result = await workoutLog.create(req.body);
            res.status(201).json(result);
        } catch(error) {
            next(error);
        }
    }
}