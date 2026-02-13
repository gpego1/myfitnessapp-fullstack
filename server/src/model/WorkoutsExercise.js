import mongoose from "mongoose";

const workouExerciseSchema = mongoose.Schema(
    {
        id: {type: mongoose.Schema.ObjectId},
        exercise: {
            type: mongoose.Types.ObjectId,
            autopopulate: true,
            ref: "exercises",
            required: [true, "The exercise is required"]
        },
        workout:{
            type: mongoose.Types.ObjectId,
            autopopulate: true,
            required: [true, "The workout is required"],
            ref: "workouts"
        },
        sets: {type: Number, required: [true, "The sets are required"]},
        load: {type: Number, required: [true, "The load is required"]},
        order: {type: Number, required: [true, "The order is required"]}
    }
);
const workoutExercises = mongoose.model("workouExercises", workouExerciseSchema);
export default workoutExercises;