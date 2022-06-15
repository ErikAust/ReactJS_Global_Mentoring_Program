import { useEffect, useState } from "react";
import Fill from "../../assets/Fill.png";
import { Option } from "./option";
import styles from "./styles.module.css";

const Select = ({ id, value, label, onChange, options, editingMovie }) => {
  const [selectstatus, setSelectStatus] = useState(false);
  const [inputValue, setInputValue] = useState(
    editingMovie?.genre.split(", ") || []
  );

  const formatingValue = () => {
    if (inputValue.length) {
      return inputValue.join(", ");
    } else if (inputValue.length === 1) {
      return inputValue[0];
    } else {
      return value;
    }
  };

  const valueHandler = (option) => {
    if (inputValue.includes(option)) {
      setInputValue((prev) => prev.filter((elem) => elem !== option));
    } else {
      if (inputValue.length < 3) {
        setInputValue((prev) => [...prev, option]);
      }
    }
  };

  useEffect(() => {
    onChange({
      target: {
        id: id,
        value: formatingValue(),
      },
    });
  }, [inputValue]);

  return (
    <>
      <div className={styles.select}>
        <label htmlFor={label}>{label}</label>
        <div>
          <p
            className={
              inputValue.length || editingMovie
                ? [styles.value, styles.valueChanged].join(" ")
                : styles.value
            }
          >
            {formatingValue()}
          </p>
          <img
            className={styles.fill}
            src={Fill}
            alt="Fill"
            onClick={() => setSelectStatus(!selectstatus)}
          />
          <input type="text" id={id} value={value} onChange={() => {}} />
        </div>
      </div>
      {selectstatus && (
        <div className={styles.options}>
          {options.map((option) => (
            <Option
              title={option}
              key={option}
              onChange={valueHandler}
              arr={inputValue}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Select;
