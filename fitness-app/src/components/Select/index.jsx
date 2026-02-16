import styles from "./styles.module.css";

export default function Select({
  options = [],
  variant = "primary",
  fullWidth = false
}) {
  return (
    <select
      className={`${styles.select} ${styles[variant]} ${
        fullWidth ? styles.fullWidth : ""
      }`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
