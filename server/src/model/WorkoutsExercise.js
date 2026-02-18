import mongoose from "mongoose";
import autopopulate from 'mongoose-autopopulate';


const workoutExerciseSchema = mongoose.Schema(
    {
        id: {type: mongoose.Schema.ObjectId},
        exercise: [
        {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true,
            ref: "exercises",
            required: [true, "The exercise is required"]
          }
        ],
        workout:{
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true,
            required: [true, "The workout is required"],
            ref: "workouts"
        },
        sets: {type: Number, required: [true, "The sets are required"]},
        load: {type: Number, required: [true, "The load is required"]},
        order: {type: Number, required: [true, "The order is required"]}
    }
);

workoutExerciseSchema.plugin(autopopulate);

workoutExerciseSchema.path("exercise").validate(function (value) {
    const unique = new Set(value.map(v => v.toString()));
    return unique.size === value.length;
}, "Exercises cannot be duplicated at the same workout");
const workoutExercises = mongoose.model("workoutexercises", workoutExerciseSchema);
export default workoutExercises;