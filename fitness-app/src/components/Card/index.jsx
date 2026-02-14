import styles from './styles.module.css';

export default function Card({ children, onClick, className = '', variant = 'default' }) {
  return (
    <div 
      className={`${styles.card} ${styles[variant]} ${className} ${onClick ? styles.clickable : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
