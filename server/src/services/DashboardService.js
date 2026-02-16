import NotFound from "../errors/NotFound.js";
import { workouts, User, Exercise, workoutExercises, workoutLog, meals } from "../model/index.js";
import UserGoalService from "./UserGoalService.js"

export default class DashboardService {

    static async generateDashboard(userId, date = new Date()) {
         const user = await User.findById(userId);
        if (!user) throw new NotFound("User not found.");

        // Progresso diário
        const dailyProgress = await UserGoalService.dailyProgress(userId, date);

        // Logs de treinos completados
        const logs = await workoutLog.find({ user: userId }).populate("workout");
        const completedWorkout = logs.length;

        // Obter todos os workoutExercises do usuário
        const workoutIds = logs.map(log => log.workout._id);
        const exercises = await workoutExercises.find({ workout: { $in: workoutIds } })
            .populate("exercise")
            .populate("workout")
            .sort({ order: 1 });

        // Montar plano de treino agrupado por workout
        const workoutPlanMap = {};
        exercises.forEach(we => {
            const title = we.workout.title;
            if (!workoutPlanMap[title]) {
                workoutPlanMap[title] = {
                    workoutId: we.workout._id,
                    dayOfWeek: we.workout.dayOfWeek,
                    level: we.workout.level,
                    muscleGroup: we.workout.muscleGroup,
                    description: we.workout.description,
                    exercises: []
                };
            }
            workoutPlanMap[title].exercises.push({
                name: we.exercise.name,
                sets: we.sets,
                load: we.load,
                order: we.order
            });
        });

        const mealsPlan = await meals.find({ user: userId })
            .sort({ date: 1 })
            .limit(4);

        const mealPlan = mealsPlan.map(m => ({
            name: m.name,
            calories: m.calories,
            protein: m.protein,
            carbs: m.carbs,
            fat: m.fat
        }));

        // Calcular restante e porcentagem
        const remaining = {
            calories: user.dailyCaloriesGoal - dailyProgress.consumed.calories,
            protein: user.dailyProteinGoal - dailyProgress.consumed.protein,
            carbs: user.dailyCarbsGoal - dailyProgress.consumed.carbs,
            fat: user.dailyFatGoal - dailyProgress.consumed.fat
        };

        const percentage = {
            calories: Math.round((dailyProgress.consumed.calories / user.dailyCaloriesGoal) * 100),
            protein: Math.round((dailyProgress.consumed.protein / user.dailyProteinGoal) * 100),
            carbs: Math.round((dailyProgress.consumed.carbs / user.dailyCarbsGoal) * 100),
            fat: Math.round((dailyProgress.consumed.fat / user.dailyFatGoal) * 100)
        };

        return {
            goal: user.goal,
            progress: {
                calories: dailyProgress.consumed.calories,
                caloriesGoal: user.dailyCaloriesGoal,
                protein: dailyProgress.consumed.protein,
                carbs: dailyProgress.consumed.carbs,
                fat: dailyProgress.consumed.fat,
                completedWorkout,
                workoutsTotal: Object.keys(workoutPlanMap).length,
                remaining,
                percentage
            },
            workoutPlan: Object.values(workoutPlanMap),
            mealPlan
        };
    }


     static async generateWorkoutAndMealsForUser(userId) {
        const user = await User.findById(userId);
        if (!user) throw new NotFound("User not found");

        const goal = user.goal;

        const muscleGroupsByGoal = {
            "Lose fat": ["Full Body", "Legs", "Back"],
            "Cutting": ["Full Body", "Legs", "Back"],
            "Hypertrophy": ["Chest", "Back", "Legs", "Shoulders", "Arms"],
            "Bulking": ["Chest", "Back", "Legs", "Shoulders", "Arms"],
            "Maintenance": ["Full Body", "Core", "Legs"]
        };

        const levelsByGoal = {
            "Lose fat": ["Beginner", "Intermediate"],
            "Cutting": ["Beginner", "Intermediate"],
            "Hypertrophy": ["Intermediate", "Advanced"],
            "Bulking": ["Intermediate", "Advanced"],
            "Maintenance": ["Beginner", "Intermediate"]
        };

        const muscleGroups = muscleGroupsByGoal[goal] || ["Full Body"];
        const levels = levelsByGoal[goal] || ["Beginner"];

        // Criar workouts
        const createdWorkouts = await Promise.all(
            [0, 1].map(i =>
                workouts.create({
                    title: `${goal} Workout ${i + 1}`,
                    level: levels[i % levels.length],
                    muscleGroup: muscleGroups[i % muscleGroups.length],
                    description: `Workout focused on ${goal}`,
                    dayOfWeek: i === 0 ? "Monday" : "Thursday"
                })
            )
        );

        // Criar exercícios para cada workout
        await Promise.all(
            createdWorkouts.map(async workout => {
                const exercisesForWorkout = await Exercise.find({ muscleTarget: workout.muscleGroup }).limit(5);
                await Promise.all(
                    exercisesForWorkout.map((ex, index) =>
                        workoutExercises.create({
                            workout: workout._id,
                            exercise: ex._id,
                            sets: ["Hypertrophy", "Bulking"].includes(goal) ? 4 : 3,
                            load: ["Hypertrophy", "Bulking"].includes(goal) ? 70 : 50,
                            order: index + 1
                        })
                    )
                );
            })
        );

        // Criar refeições
        const mealNames = ["Breakfast", "Lunch", "Snack", "Dinner"];
        await Promise.all(
            mealNames.map(name =>
                meals.create({
                    user: user._id,
                    name,
                    calories: goal === "Bulking" ? 3000 : goal === "Hypertrophy" ? 2500 : 2000,
                    protein: goal === "Bulking" ? 220 : goal === "Hypertrophy" ? 200 : 160,
                    carbs: goal === "Bulking" ? 300 : goal === "Hypertrophy" ? 250 : 150,
                    fat: goal === "Bulking" ? 70 : goal === "Hypertrophy" ? 60 : 45,
                    date: new Date()
                })
            )
        );
    }

}