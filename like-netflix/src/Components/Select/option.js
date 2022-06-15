import { useEffect, useState } from "react";
import Indicator from "../../assets/Indicator.png";
import styles from "./styles.module.css";

export const Option = ({ title, onChange, arr }) => {
  const [clicked, setClicked] = useState();

  useEffect(() => {
    setClicked(arr.includes(title));
  }, [arr]);

  return (
    <div
      className={styles.option}
      onClick={() => {
        onChange(title);
        if (arr.length < 3) setClicked(!clicked);
      }}
    >
      <div
        className={
          clicked
            ? [styles.checkBox, styles.checkRed].join(" ")
            : styles.checkBox
        }
      >
        <img className={styles.indicator} src={Indicator} alt="Indicator" />
      </div>
      {title}
    </div>
  );
};
