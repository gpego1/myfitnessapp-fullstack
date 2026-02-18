import api from "../../api/index.js";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import styles from "./styles.module.css";


export default function WorkoutDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [workout, setWorkout] = useState(null);
  const [workoutExercises, setWorkoutExercises] = useState([]);

  useEffect(() => {
    async function loadWorkout() {
      try {
        const { data } = await api.get(`/workouts/${id}`);
        setWorkout(data);
      } catch {
        alert("Treino não encontrado");
        navigate("/workouts");
      }
    }

    loadWorkout();
  }, [id]);

  useEffect(() => {
    async function loadExercises(){
      try {
        const { data } = await api.get(`/workoutexercises?workoutId=${id}`);
        setWorkoutExercises(data);
      } catch(error) {
        alert("Could not load exercises");
      }
    }
    loadExercises();
  }, [id]);

   if (!workout) return null;

  return (
    <div className={styles.container}>
      <Button text="← Voltar" variant="secondary" onClick={() => navigate("/workouts")} />

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.category}>{workout.category}</span>
          <h1 className={styles.title}>{workout.title}</h1>
          <p className={styles.description}>{workout.description}</p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              ⏱️ {workout.level}
            </div>

            <div className={styles.metaItem}>
              📊 {workout.level}
            </div>

            <div className={styles.metaItem}>
              🏋️ {workout.level}
            </div>
          </div>

          <Button text="Iniciar Treino" variant="primary" />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>EXERCÍCIOS</h2>

        <div className={styles.exercisesList}>
          {workoutExercises.map((exercise, index) => (
          <Card key={exercise._id} className={styles.exerciseCard}>
            <div className={styles.exerciseContent}>
              <div className={styles.exerciseNumber}>{index + 1}</div>

              <div>
                <h3>{exercise.name}</h3>
                <span>🎯 {exercise.muscleTarget}</span>
                <span> 🔧 {exercise.equipment}</span>
              </div>
            </div>
          </Card>
        ))}
        </div>
      </div>
    </div>
  );
}
