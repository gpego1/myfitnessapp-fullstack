import { workoutExercises } from "../model/index.js";
import { workoutExerciseService } from "../services/WorkoutExerciseService.js";

export class WorkoutExercisesController {

    static async getWorkoutExercisesById(req, res, next) {
        try {
            const id = req.params.id;
            const result = await workoutExercises
            .findById(id)
            .then(doc => doc.populate(["exercise","workout"]))
            ;
            res.status(200).json(result);
        } catch(error) {
            next(error);
        }
    }

    static async getByWorkoutId(req, res, next) {
  try {
    console.log("CHEGOU");

    const { workoutId } = req.query;

    const result =
      await workoutExerciseService.getWorkoutExercisesByWorkoutId(workoutId);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}


    static async createWorkoutExercises(req, res, next) {
        try {
            const result = await workoutExercises.create(req.body)            ;
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
}