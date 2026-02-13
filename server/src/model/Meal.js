import mongoose from "mongoose";

const mealSchema = mongoose.Schema(
    {
        id : {type: mongoose.Types.ObjectId},
        user: {
            type: mongoose.Types.ObjectId,
            autopopulate: true,
            ref: "users",
            required: [true, "User is required"]
        },
        calories: {type: Number, required: [true, "calories is required"]},
        protein: {type: Number, required: [true, "protein is required"]},
        carbs: {type: Number, required: [true, "carbs is required"]},
        fat: {type: Number, required: [true, "fat is required"]},
        date: {type: Date, required: [true, "date is required"]}
    }
);
const meals = mongoose.model("meals", mealSchema);
export default meals;