import { useContext } from "react";
import { Context } from "../../helpers/context";
import styles from "./styles.module.css";
import Oval from "../../assets/Oval.png";

export const MoviePage = () => {
  const { selectedMovie } = useContext(Context);

  return (
    <div className={styles.movieContainer}>
      <img src={selectedMovie.movieUrl} alt="movie" />
      <div className={styles.movieInfo}>
        <div className={styles.movieName}>
          <p>{selectedMovie.title}</p>
          <div className={styles.movieRating}>
            <p>{selectedMovie.rating}</p>
            <img src={Oval} alt="oval" />
          </div>
        </div>
        <p className={styles.genre}>{selectedMovie.genre}</p>
        <p className={styles.yearTime}>
          <span>{selectedMovie.releaseDate}</span>
          <span>{selectedMovie.runtime}</span>
        </p>
        <p className={styles.description}>{selectedMovie.overview}</p>
      </div>
    </div>
  );
};

export default MoviePage;
