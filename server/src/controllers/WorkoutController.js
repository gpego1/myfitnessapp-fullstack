import { workouts } from "../model/index.js";

export class WorkoutController {

static async getAllWorkouts(req, res) {
    try {
        const result =  await workouts.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Not found", error: error.message})
    }
 }

 static async createWorkout(req, res) {
    try {
        const createdWorkout = req.body;
        res.status(201).json({
            message: "Succesfully created Entity",
            obj: createdWorkout
        })
    } catch (error) {
        res.status(500).json({ message: "Not found", error: error.message})
    }
 }
    

}
