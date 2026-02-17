import styles from "./styles.module.css";

export default function Select({
  label,
  options = [],
  variant = "primary",
  fullWidth = false,
  name,
  value,
  onChange
}) {
  return (
    <div>
    {label && <label>{label}</label>}

    <select
      name={name}
      value={value}
      onChange={onChange}
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
     </div>
  );
}
