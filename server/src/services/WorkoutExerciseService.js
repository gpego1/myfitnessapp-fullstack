import mongoose from "mongoose";
import NotFound from "../errors/NotFound.js";
import InvalidReq from "../errors/IvalidReq.js"
import { workoutExercises} from "../model/index.js";

export class workoutExerciseService {

  static async create(entity) {
    const { workout, exercise } = entity;
    const exists = await workoutExercises.findOne({
      workout,
      exercise
    });
    if (exists) throw new InvalidReq("The workout its already registered");
    const createdWE = await workoutExercises.create(entity);
    return createdWE;
  }

    static async getWorkoutExercisesByWorkoutId(workoutId) {
  if (!workoutId) throw new NotFound("Cannot find workout");

  const entity = await workoutExercises
    .findOne({ workout: new mongoose.Types.ObjectId(workoutId) })  
    .populate("exercise");

  if (!entity) throw new NotFound("WorkoutExercises not found");

  return entity;
}



}