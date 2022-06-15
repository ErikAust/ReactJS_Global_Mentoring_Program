import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../helpers/context";
import ContextMenu from "../ContextMenu";
import styles from "./styles.module.css";

const Movie = ({ movie }) => {
  const { selectMovie } = useContext(Context);
  const [hover, unHover] = useState(false);
  const [contextMenu, setContextMenu] = useState(true);

  const stylesIcon = () => (hover ? styles.iconBlock : styles.hide);

  const stylesMenu = () => (contextMenu ? styles.hide : styles.contextBtn);

  const openMenu = () => {
    unHover(!hover);
    setContextMenu(!contextMenu);
  };

  const closeMenu = () => {
    setContextMenu(!contextMenu);
    unHover(!hover);
  };

  const showButton = () => {
    if (contextMenu) {
      unHover(true);
    }
  };

  const hideButton = () => {
    unHover(false);
  };

  return (
    <div
      className={styles.movieBlock}
      onMouseEnter={showButton}
      onMouseLeave={hideButton}
    >
      <img
        src={movie.movieUrl}
        alt="poster"
        className={styles.poster}
        onClick={() => {
          selectMovie(movie);
        }}
      />
      <ContextMenu
        data={["Edit", "Delete"]}
        close={closeMenu}
        style={stylesMenu()}
        movie={movie}
      />
      <button className={stylesIcon()} onClick={openMenu}>
        <div className={styles.block}></div>
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm0,164a12,12,0,1,1,12-12A12,12,0,0,1,128,188Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,128,92Z" />
        </svg>
      </button>
      <div>
        <div className={styles.infoMovie}>
          <div>
            <p>{movie.title}</p>
            <span>{movie.releaseDate}</span>
          </div>
          <p className={styles.genre}>{movie.genre}</p>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    movieUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
