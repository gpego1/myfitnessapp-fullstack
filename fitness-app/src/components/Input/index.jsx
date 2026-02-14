import styles from './styles.module.css';

export default function Input({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  name,
  required = false 
}) {
  return (
    <div className={styles.inputGroup}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        required={required}
      />
    </div>
  );
}
