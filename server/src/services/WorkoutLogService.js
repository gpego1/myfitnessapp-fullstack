import { User, workoutExercises, workoutLog } from "../model/index.js";
import NotFound from "../errors/NotFound.js";
import mongoose from "mongoose";

export default class WorkoutLogService {
    static async create(data) {
        const { user, workoutExercises: exercisesIds } = data;

        const userExists = await User.exists({ _id: user });
        if(!userExists) throw new NotFound("User not found");

        const exercisesExists = await workoutExercises.find({
            _id: { $in: exercisesIds }
        });


        if (!exercisesExists.length) throw new NotFound("Exercises doesnt exists");

        return await workoutLog.create(data);
    }

    static async history(userId) {
        console.log(userId);
        const result = await workoutLog
        .find({ user: new mongoose.Types.ObjectId(userId) })
        .populate("workoutExercises")
        .select("-user")
        .sort({ completedAt: -1 })
        .lean();

        console.log(result)

        // if (!result.length) return [];

        return result.map(log => ({
                workoutExercises: log.workoutExercises,
                duration: log.duration,
                caloriesBurned: log.caloriesBurned,
                completedAt: log.completedAt
            }));
    }
}