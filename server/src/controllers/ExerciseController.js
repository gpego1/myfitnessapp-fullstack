import ExerciseService from "../services/ExerciseService.js";
import NotFound from "../errors/NotFound.js";
import { Exercise } from "../model/index.js";

export class ExerciseController {

    static async getExerciseById(req, res, next) {
        try {
            const result = await ExerciseService.getById(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async createExercise(req, res, next) {
        try {
            let createdExercises = new Exercise(req.body);
            const result = await createdExercises.save(createdExercises);
            
            res.status(201).send({
            message: "Succesfully created Entity",
            obj: result.toJSON()
        })
        } catch (error) {
            next(error);
        }
    }

    static async updateExercises(req, res, next) {
        try {
            const id = await ExerciseService.getById(req.params.id);
            const result = await Exercise.findByIdAndUpdate(id, {$set: req.body});
           
            if (result != null) {
                res.status(200).json(result);
           } else {
            throw new NotFound("Not found the exercise")
           }
        } catch (error) {
            next(error);
        }
    }

    static async deleteExercises(req, res, next) {
        try {
            const id = await ExerciseService.getById(req.params.id);
            const result = await Exercise.findByIdAndDelete(id);
            if (result != null) {
                res.status(204);
            } else {
                throw new NotFound("Not found the exercise");
            }
        } catch (error) {
            next(error);
        }
    }
}