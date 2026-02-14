import { useState } from 'react';
import Card from '../../components/Card';
import { exercises } from '../../mock/exercises';
import styles from './styles.module.css';

export default function Exercises() {
  const [search, setSearch] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState('Todos');

  const muscles = ['Todos', ...new Set(exercises.map(ex => ex.muscleTarget))];

  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(search.toLowerCase());
    const matchesMuscle = selectedMuscle === 'Todos' || exercise.muscleTarget === selectedMuscle;
    return matchesSearch && matchesMuscle;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>BANCO DE EXERCÍCIOS</h1>
        <p className={styles.subtitle}>Explore {exercises.length} exercícios diversos</p>
      </div>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="🔍 Buscar exercício..."
          className={styles.searchInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className={styles.muscleFilters}>
          {muscles.map(muscle => (
            <button
              key={muscle}
              className={`${styles.muscleButton} ${selectedMuscle === muscle ? styles.active : ''}`}
              onClick={() => setSelectedMuscle(muscle)}
            >
              {muscle}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.results}>
        <p className={styles.resultsCount}>
          {filteredExercises.length} exercício{filteredExercises.length !== 1 ? 's' : ''} encontrado{filteredExercises.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className={styles.grid}>
        {filteredExercises.map((exercise, index) => (
          <Card 
            key={exercise.id}
            className={styles.exerciseCard}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className={styles.cardContent}>
              <div className={styles.exerciseIcon}>🏋️</div>
              <h3 className={styles.exerciseName}>{exercise.name}</h3>
              
              <div className={styles.tags}>
                <span className={styles.tag}>
                  <span className={styles.tagIcon}>🎯</span>
                  {exercise.muscleTarget}
                </span>
                <span className={styles.tag}>
                  <span className={styles.tagIcon}>🔧</span>
                  {exercise.equipment}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredExercises.length === 0 && (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🔍</span>
          <p className={styles.emptyText}>Nenhum exercício encontrado</p>
          <p className={styles.emptySubtext}>Tente ajustar os filtros ou busca</p>
        </div>
      )}
    </div>
  );
}
