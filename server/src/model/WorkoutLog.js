import mongoose from "mongoose";

const workoutLogSchema = mongoose.Schema (
    {
        id: {type: mongoose.Types.ObjectId},
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: [true, "User is required"]
        },
        workoutExercises:[ {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "workout is required"],
            ref: "workoutexercises"  
        }],
        duration: {type: Number,  required: [true, "duration is required"]},
        caloriesBurned: {type: Number,  required: [true, "caloriesBurned is required"]},
        completedAt: {type: Date,  required: [true, "completedAt is required"]}
    },
    {timestamps: true}
);

const workoutLog = mongoose.model("workoutlogs", workoutLogSchema);
export default workoutLog;