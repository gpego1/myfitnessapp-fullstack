import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Types.ObjectId},
        title: {type: String, required: [true, "The title is required"]},
        description: {type: String, required: [true, "Description is required"]},
        dayOfWeek: {type: String, required: [true, "Days of week are required"]},
        createdAt: {type: Date, required: [true, "CreatedAt is required"]}
    }
)

const workouts = mongoose.model("workouts", workoutSchema)
export default workouts;