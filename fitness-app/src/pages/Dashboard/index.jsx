import api from "../../api/index.js";
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';


export default function Dashboard() {
  const navigate = useNavigate();
  const [workouts, setWorkouts ] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    totalExercises: 0,
    totalTime: "12H"
  });
  

  const recentWorkouts = workouts.slice(0, 3);

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const { data } = await api.get("/workouts");
        setWorkouts(data);
      } catch(error) {
        console.error("Could not load workouts: ", error)
      }
    }
    loadWorkouts();
  }, []);

  useEffect(() => {
    async function loadExercises() {
      try {
        const { data } = await api.get("/exercises");
        setExercises(data);
      } catch(error) {
        console.error("Could not load exercises: ", error)
      }
    }
    loadExercises();
  }, [])

  useEffect(() => {
    async function loadStats() {
      try {
        const { data } = await api.get("/workoutlogs/history");
        setStats(data);
    } catch (error) {
      console.error("Could not load stats");
      }
    }
    loadStats();
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>BEM-VINDO DE VOLTA, ATLETA</h1>
          <p className={styles.subtitle}>Continue sua jornada de transformação</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <Card variant="highlight">
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💪</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>{workouts.length}</div>
              <div className={styles.statLabel}>Treinos Disponíveis</div>
            </div>
          </div>
        </Card>

        <Card variant="highlight">
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🏋️</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>{exercises.length}</div>
              <div className={styles.statLabel}>Exercícios no Banco</div>
            </div>
          </div>
        </Card>

        <Card variant="highlight">
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📅</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>{stats.activeDays}</div>
              <div className={styles.statLabel}>Dias Ativos/Semana</div>
            </div>
          </div>
        </Card>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>TREINOS EM DESTAQUE</h2>
          <Button 
            text="Ver Todos" 
            variant="outline" 
            onClick={() => navigate('/workouts')}
          />
        </div>

        <div className={styles.workoutsGrid}>
          {recentWorkouts.map((workout) => (
            <Card 
              key={workout._id} 
              onClick={() => navigate(`/workouts/${workout._id}`)}
            >
              <div className={styles.workoutCard}>
                <div className={styles.workoutHeader}>
                  <h3 className={styles.workoutTitle}>{workout.title}</h3>
                  <span className={styles.workoutBadge}>{workout.category}</span>
                </div>
                <p className={styles.workoutDescription}>{workout.description}</p>
                <div className={styles.workoutFooter}>
                  <div className={styles.workoutMeta}>
                    <span>⏱️ {workout.duration}</span>
                    <span>📊 {workout.difficulty}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className={styles.quickActions}>
        <h2 className={styles.sectionTitle}>AÇÕES RÁPIDAS</h2>
        <div className={styles.actionsGrid}>
          <Card onClick={() => navigate('/workouts')}>
            <div className={styles.actionCard}>
              <span className={styles.actionIcon}>💪</span>
              <span className={styles.actionText}>Começar Treino</span>
            </div>
          </Card>
          <Card onClick={() => navigate('/exercises')}>
            <div className={styles.actionCard}>
              <span className={styles.actionIcon}>🏋️</span>
              <span className={styles.actionText}>Explorar Exercícios</span>
            </div>
          </Card>
          <Card onClick={() => navigate('/profile')}>
            <div className={styles.actionCard}>
              <span className={styles.actionIcon}>⚙️</span>
              <span className={styles.actionText}>Configurações</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
