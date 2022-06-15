import { useContext } from "react";
import { Context } from "../../helpers/context";
import MoviePage from "../../Components/MoviePage";
import Search from "../../Components/Search";
import Button from "../../Components/Button";
import SearchIcon from "../../assets/icon-search.png";
import styles from "./styles.module.css";

const Header = () => {
  const { open, selectedMovie, selectMovie, changeTitle } = useContext(Context);

  return (
    <>
      <div className={styles.headContainer}>
        <p className={styles.title}>
          netflix<span>roullette</span>
        </p>
        {selectedMovie ? (
          <Button
            style={styles.searchIcon}
            title={
              <img
                src={SearchIcon}
                alt="icon-search"
                className={styles.searchImg}
              />
            }
            click={() => selectMovie(false)}
          />
        ) : (
          <Button
            style={styles.addBtn}
            title={"+ add movie"}
            click={() => {
              changeTitle("add movie");
              open();
            }}
          />
        )}
      </div>
      {selectedMovie ? (
        <MoviePage />
      ) : (
        <div className={styles.searchContainer}>
          <Search />
        </div>
      )}
    </>
  );
};

export default Header;
