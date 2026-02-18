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
        const logs = await workoutLog
        .find({ user: new mongoose.Types.ObjectId(userId) })
        .populate("workoutExercises")
        .lean();

        if (!logs.length) {
            return {
            totalWorkouts: 0,
            totalExercises: 0,
            totalTime: "0H"
        };
    }
    const totalWorkouts = logs.length;

    const totalExercises = logs.reduce((acc, log) => {
        return acc + (log.workoutExercises?.length || 0);
    }, 0);

    const totalMinutes = logs.reduce((acc, log) => {
        return acc + (log.duration || 0);
    }, 0);

    const totalHours = Math.floor(totalMinutes / 60);

        return {
            totalWorkouts,
            totalExercises, 
            totalTime: `${totalHours}H`
        }
    }
}