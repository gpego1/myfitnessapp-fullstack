import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        title: {type: String, required: [true, "The title is required"]},
        category: {
            type: String,
            enum: ["All", "Strength", "Cardio", "Functional", "Mobility"],
            required: true
        },
        level: {
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced"],
            required: [true, "Level of the workout is required"]},
        muscleGroup: {type: String, required: [true, "The muscle gorup(s) are required"]},
        description: {type: String, required: [true, "Description is required"]},
        dayOfWeek: {
            type: String,
            enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            required: [true, "Days of week are required"]
        },
    },
    {timestamps: true}
);

const workouts = mongoose.model("workouts", workoutSchema)
export default workouts;