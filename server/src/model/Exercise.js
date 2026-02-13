import mongoose from "mongoose";

const exerciceSchema = mongoose.Schema(
    {
        id: {type: mongoose.Types.ObjectId},
        name: {type: String, required: [true, "Name is required"]},
        description: {type: String, required: [true, "Description is required"]},
        muscleTarget: {type: String},
        equipment: {type: String, required: [true, "Equipament is required"]},
        videoUrl: {type: String, required: [true, "Video url is required"]},
        imageUrl: {type: String, required: [true, "Image is required"]}
        
    },
    {timestamps: true}
);
const exercises = mongoose.model("exercises", exerciceSchema);
export default exercises;