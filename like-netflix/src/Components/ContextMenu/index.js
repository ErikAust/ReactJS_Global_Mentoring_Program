import { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { Context } from "../../helpers/context";
import styles from "./styles.module.css";

export const ContextMenu = ({ data, close, style, movie, sort }) => {
  const { open, showModal, setID, changeTitle, setEditingMovie } =
    useContext(Context);
  return (
    <div className={style}>
      <div className={styles.menu}>
        {!style.includes("contextRelease") && (
          <Button title={"╳"} style={styles.cross} click={close} />
        )}
        <div>
          <Button
            title={data[0]}
            style={styles.menuBtn}
            click={() => {
              if (sort) {
                sort(data[0]);
              } else {
                changeTitle("edit movie");
                setEditingMovie(movie);
                open();
                close();
              }
            }}
          />
          <Button
            title={data[1]}
            style={styles.menuBtn}
            click={() => {
              if (sort) {
                sort(data[1]);
              } else {
                open();
                setID(movie.id);
                showModal();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

ContextMenu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  close: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
  movie: PropTypes.object,
  sort: PropTypes.func,
};

export default ContextMenu;
