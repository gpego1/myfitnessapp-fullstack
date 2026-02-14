import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { workouts } from '../../mock/workouts';
import { exercises } from '../../mock/exercises';
import styles from './styles.module.css';

export default function Dashboard() {
  const navigate = useNavigate();
  
  const stats = {
    totalWorkouts: workouts.length,
    totalExercises: exercises.length,
    activeDays: 5
  };

  const recentWorkouts = workouts.slice(0, 3);

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
              <div className={styles.statNumber}>{stats.totalWorkouts}</div>
              <div className={styles.statLabel}>Treinos Disponíveis</div>
            </div>
          </div>
        </Card>

        <Card variant="highlight">
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🏋️</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>{stats.totalExercises}</div>
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
              key={workout.id} 
              onClick={() => navigate(`/workouts/${workout.id}`)}
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
