import NotFound from "../errors/NotFound.js";
import { workouts } from "../model/index.js";

export class WorkoutController {

 static async getWorkoutById(req, res, next) {
    try {
        const id = req.params.id;
        const result = await workouts.findById(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
 }

static async getWorkoutByTitle(req, res, next) {
  try {
    const { title } = req.query;

    if (title) {
      const result = await workouts.find({
        title: { $regex: title, $options: "i" }
      });

      res.status(200).json(result);
    } else {
      const result = await workouts.find();
      res.status(200).json(result);
    }

  } catch (error) {
    next(error);
  }
}


 static async createWorkout(req, res, next) {
    try {
        const result = await workouts.create(req.body);
        res.status(201).json(result)
    } catch (error) {
        next(error);
    }
 }
 static async updateWorkout(req, res, next) {
    try {
        const id = req.params.id;
        const search = await workouts.findByIdAndUpdate(id, {$set:req.body});
        if (search != null) {
            res.status(200).json({message: "Workout has been updated successfully!"})
        } else {
            next(new NotFound("Id cannot be found to update"))
        }
    } catch (error) {
        next(error);
    }
 }
 static async deleteWorkoutById(req, res, next) {
    try {
        const id = req.params.id;
        await workouts.findByIdAndDelete(id)
        res.status(204);
    } catch(error) {
        next(error);
    }
 }
    
}
