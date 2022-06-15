import { useContext } from "react";
import styles from "./styles.module.css";
import Filter from "../../Components/Filter";
import MovieItem from "../../Components/MovieItem";
import { Context } from "../../helpers/context";

export const Content = () => {
  const { movies, films } = useContext(Context);

  return (
    <div className={styles.contentBlock}>
      <div className={styles.inner}>
        <Filter />
        <p className={styles.countMovies}>
          <span>{films ? films.length : movies.length}</span> movies found
        </p>
      </div>
      <div className={styles.movieContainer}>
        <div className={styles.movies}>
          {films ? films.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
          :
              movies.map((movie) => (
                  <MovieItem key={movie.id} movie={movie} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Content;
