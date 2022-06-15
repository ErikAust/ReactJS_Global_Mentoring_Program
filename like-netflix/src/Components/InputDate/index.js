import Calendar from "../../assets/Calendar.png";
import styles from "./styles.module.css";

const InputDate = ({ id, value, label, onChange }) => (
  <div className={styles.date}>
    <label htmlFor={label}>{label}</label>
    <div>
      <p
        className={
          typeof value === "number"
            ? [styles.value, styles.valueChanged].join(" ")
            : styles.value
        }
      >
        {value}
      </p>
      <img className={styles.calendar} src={Calendar} alt="calendar" />
      <input type="date" id={id} onChange={onChange} />
    </div>
  </div>
);

export default InputDate;
