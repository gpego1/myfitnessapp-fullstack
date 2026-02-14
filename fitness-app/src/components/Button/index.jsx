import styles from './styles.module.css';

export default function Button({ text, onClick, variant = 'primary', type = 'button', fullWidth = false }) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
