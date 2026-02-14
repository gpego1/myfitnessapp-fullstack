import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>⚡</span>
        <span className={styles.logoText}>FITFORCE</span>
      </div>
      
      <ul className={styles.navLinks}>
        <li>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
          >
            <span className={styles.icon}>📊</span>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/workouts" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
          >
            <span className={styles.icon}>💪</span>
            <span>Treinos</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/exercises" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
          >
            <span className={styles.icon}>🏋️</span>
            <span>Exercícios</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
          >
            <span className={styles.icon}>👤</span>
            <span>Perfil</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
