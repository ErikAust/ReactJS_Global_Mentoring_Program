import { useState, useContext } from "react";
import { buttons } from "../../data/buttons";
import Fill from "../../assets/Fill.png";
import ButtonLink from "../ButtonLink";
import ContextMenu from "../ContextMenu";
import { Context } from "../../helpers/context";
import styles from "./styles.module.css";

export const Filter = () => {
  const { movies, sortFilms } = useContext(Context);
  const [data, setData] = useState(buttons);
  const [contextMenu, setContextMenu] = useState(true);

  const stylesMenu = () => (contextMenu ? styles.hide : styles.contextRelease);

  const sort = (title) => {
    if (title === "all") {
      sortFilms(null);
    } else {
      sortFilms(
        movies.filter((movie) => {
          return movie.genre.toLowerCase().includes(title);
        })
      );
    }
  };

  const sortBy = (date) => {
    if (date === "Earlier") {
      sortFilms(movies.sort((a, b) => a.releaseDate - b.releaseDate));
    } else {
      sortFilms(movies.sort((a, b) => b.releaseDate - a.releaseDate));
    }
  };

  const switchBtn = (title) => {
    const newData = data.map((elem) => {
      if (elem.title === title) {
        return { ...elem, active: true };
      }
      return { ...elem, active: false };
    });
    setData(newData);
  };

  return (
    <div className={styles.panelBtns}>
      <div className={styles.toolsBlock}>
        <div className={styles.filters}>
          {data.map((item) => (
            <ButtonLink
              key={item.id}
              title={item.title}
              active={item.active}
              changeActive={switchBtn}
              sort={sort}
            />
          ))}
        </div>
        <div className={styles.sortBy}>
          <p>sort by</p>
          <div className={styles.selectBtn}>
            <ButtonLink title={"release date"} changeActive={() => null} />
            <img
              className={styles.imgFill}
              src={Fill}
              alt="fill"
              onClick={() => {
                setContextMenu(!contextMenu);
              }}
            />
            <ContextMenu
              data={["Newest", "Earlier"]}
              close={() => {
                setContextMenu(!contextMenu);
              }}
              style={stylesMenu()}
              sort={sortBy}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
