import mongoose from "mongoose";
import NotFound from "../errors/NotFound.js";
import { workoutExercises} from "../model/index.js";

export class workoutExerciseService {
    static async getWorkoutExercisesByWorkoutId(workoutId) {
  if (!workoutId) throw new NotFound("Cannot find workout");

  const entity = await workoutExercises
    .find({ workout: new mongoose.Types.ObjectId(workoutId) })  

  if (!entity.length) throw new NotFound("WorkoutExercises not found");

  return entity;
}



}