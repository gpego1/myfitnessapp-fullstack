import mongoose from "mongoose";

const exerciceSchema = mongoose.Schema(
    {
        name: {type: String, required: [true, "Name is required"]},
        description: {type: String, required: [true, "Description is required"]},
        muscleTarget: {type: String},
        intensity: {type: String, enum: ["High","Medium"], default: "Medium",required: true},
        equipment: {type: String, required: [true, "Equipament is required"]},
        videoUrl: {type: String, required: [true, "Video url is required"]},
        imageUrl: {type: String, required: [true, "Image is required"]}
        
    },
    {timestamps: true}
);
const Exercise = mongoose.model("exercises", exerciceSchema);
export default Exercise;