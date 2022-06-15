import styles from "./styles.module.css";

const Input = ({ id, label, value, type, placeholder, style, onChange }) => (
  <div className={[styles.input, style].join(" ")}>
    <label htmlFor={`${type}-${Math.random()}`}>{label}</label>
    <input
      type={type || "text"}
      id={id}
      placeholder={placeholder || null}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
