import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Types.ObjectId},
        name: {type: String, required: [true, "Name is required"]},
        email: {type: String, required: [true, "Email is required"], unime: true},
        password: {type: String, required: [true, "Password is required"], select: false},
        age: {type: Number, required: [true, "Age is required"]},
        height: {type: Number, required: [true, "Height is required"]},
        weight: {type: Number, required: [true, "Weight is required"]},
        goal: {type: String, 
            enum:{
                values: ["cutting", "bulking", "maintenance"]
            },
            required: [true, "Goal is required"]
        },
        role: {
            type: String,
            enum: {
                values: ["USER", "ADMIN"], 
                default: "USER"
            },
            required: [true, "Role is required"]
        }
        },
    {timestamp: true}
)
const User = mongoose.model("users", UserSchema);
export default User;