import api from '../../api/index.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import styles from './styles.module.css';

export default function Workouts() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Todos');
  const [workouts, setWorkouts] = useState([]);

  const categories = ['Todos', ...new Set(workouts.map(w => w.category))];
  
  const filteredWorkouts = filter === 'Todos' 
    ? workouts 
    : workouts.filter(w => w.category === filter);

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const { data } = await api.get("/workouts");
        setWorkouts(data);
      } catch (error) {
        alert("Could not load workouts");
      }
    }
    loadWorkouts();
  }, [])
  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>BIBLIOTECA DE TREINOS</h1>
        <p className={styles.subtitle}>Escolha seu próximo desafio</p>
      </div>

      <div className={styles.filters}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredWorkouts.map((workout, index) => (
          <Card 
            key={workout._id}
            onClick={() => navigate(`/workouts/${workout._id}`)}
            className={styles.workoutCard}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <span className={styles.badge}>{workout.category}</span>
                <span className={styles.difficulty}>{workout.level}</span>
              </div>
              
              <h2 className={styles.workoutTitle}>{workout.title}</h2>
              <p className={styles.description}>{workout.description}</p>
              
              <div className={styles.cardFooter}>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <span className={styles.metaIcon}>⏱️</span>
                    {workout.title}
                  </span>
                  <span className={styles.metaItem}>
                    <span className={styles.metaIcon}>🏋️</span>
                    {workout.title.length} exercícios
                  </span>
                </div>
                <div className={styles.arrow}>→</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredWorkouts.length === 0 && (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>😔</span>
          <p className={styles.emptyText}>Nenhum treino encontrado nesta categoria</p>
        </div>
      )}
    </div>
  );
}
