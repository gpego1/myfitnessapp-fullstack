import { Exercise } from "../model/index.js";

class ExerciseService {

    static async getById(id) {
        return Exercise.findById(id);
    }

}
export default ExerciseService;