import PropTypes from "prop-types";
import styles from "./styles.module.css";

export const ButtonLink = ({ title, active, changeActive, sort }) => {
  const redBtn = () => {
    if (active && changeActive) {
      return `${styles.btnLink} ${styles.cursor} ${styles.redBorder}`;
    }
    return title !== "release date"
      ? `${styles.btnLink} ${styles.cursor}`
      : styles.btnLink;
  };

  return (
    <div
      className={styles.btnsBlock}
      onClick={() => {
        changeActive(title);
        sort(title);
      }}
    >
      <button className={redBtn()}>{title}</button>
    </div>
  );
};

ButtonLink.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  changeActive: PropTypes.func,
  sort: PropTypes.func,
};

export default ButtonLink;
