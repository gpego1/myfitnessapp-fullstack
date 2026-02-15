import mongoose from "mongoose";

const workoutLogSchema = mongoose.Schema (
    {
        id: {type: mongoose.Types.ObjectId},
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: [true, "User is required"]
        },
        workout: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "workouts",
            required: [true, "workout is required"]
        },
        duration: {type: Number,  required: [true, "duration is required"]},
        caloriesBurned: {type: Number,  required: [true, "caloriesBurned is required"]},
        completedAt: {type: Date,  required: [true, "completedAt is required"]}
    }
);

const workoutLog = mongoose.model("workoutLogs", workoutLogSchema);
export default workoutLog;