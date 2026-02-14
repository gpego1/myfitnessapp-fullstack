import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const workoutLogSchema = mongoose.Schema (
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true,
            ref: "users",
            required: [true, "User is required"]
        },
        workout: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true,
            ref: "workouts",
            required: [true, "workout is required"]
        },
        duration: {type: Number,  required: [true, "duration is required"]},
        caloriesBurned: {type: Number,  required: [true, "caloriesBurned is required"]},
        completedAt: {type: Date,  required: [true, "completedAt is required"]}
    }
);

workoutLogSchema.plugin(autopopulate);
const workoutLog = mongoose.model("workoutLogs", workoutLogSchema);
export default workoutLog;