import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { workouts } from '../../mock/workouts';
import { exercises } from '../../mock/exercises';
import styles from './styles.module.css';

export default function WorkoutDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const workout = workouts.find(w => w.id === parseInt(id));
  
  if (!workout) {
    return (
      <div className={styles.notFound}>
        <h1>Treino não encontrado</h1>
        <Button text="Voltar" onClick={() => navigate('/workouts')} />
      </div>
    );
  }

  const workoutExercises = exercises.filter(ex => 
    workout.exercises.includes(ex.id)
  );

  return (
    <div className={styles.container}>
      <Button 
        text="← Voltar" 
        variant="secondary" 
        onClick={() => navigate('/workouts')}
      />

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.category}>{workout.category}</span>
          <h1 className={styles.title}>{workout.title}</h1>
          <p className={styles.description}>{workout.description}</p>
          
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>⏱️</span>
              <div>
                <div className={styles.metaLabel}>Duração</div>
                <div className={styles.metaValue}>{workout.duration}</div>
              </div>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>📊</span>
              <div>
                <div className={styles.metaLabel}>Dificuldade</div>
                <div className={styles.metaValue}>{workout.difficulty}</div>
              </div>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>🏋️</span>
              <div>
                <div className={styles.metaLabel}>Exercícios</div>
                <div className={styles.metaValue}>{workoutExercises.length}</div>
              </div>
            </div>
          </div>

          <Button text="Iniciar Treino" variant="primary" />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>EXERCÍCIOS</h2>
        
        <div className={styles.exercisesList}>
          {workoutExercises.map((exercise, index) => (
            <Card key={exercise.id} className={styles.exerciseCard}>
              <div className={styles.exerciseContent}>
                <div className={styles.exerciseNumber}>{index + 1}</div>
                <div className={styles.exerciseInfo}>
                  <h3 className={styles.exerciseName}>{exercise.name}</h3>
                  <div className={styles.exerciseMeta}>
                    <span className={styles.exerciseTag}>
                      🎯 {exercise.muscleTarget}
                    </span>
                    <span className={styles.exerciseTag}>
                      🔧 {exercise.equipment}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
