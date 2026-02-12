import { workouts } from "../model/index.js";

export class WorkoutController {

    static async getAllWorkouts(req, res) {
        try {
            const result =  await workouts.find();
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({ message: "Not found", error: error.message})
        }
  }
}
