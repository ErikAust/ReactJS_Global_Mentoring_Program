import styles from "./styles.module.css";

const TextArea = ({ id, label, value, placeholder, onChange }) => (
  <div className={styles.textArea}>
    <label htmlFor={label}>{label}</label>
    <textarea
      id={id}
      placeholder={placeholder || null}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextArea;
