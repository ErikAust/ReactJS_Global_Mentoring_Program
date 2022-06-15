import {useEffect, useState} from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorPage from "./Components/ErrorPage";
import { Context } from "./helpers/context";
import { useFlag } from "./helpers/useFlag";
import styles from "./App.module.css";
import Header from "./Containers/Header";
import Content from "./Containers/Content";
import Footer from "./Containers/Footer";
import MovieForm from "./Containers/MovieForm";
import {useActions} from "./helpers/useActions";
import {useSelector} from "react-redux";
import {selectMovies} from "./redux/selector";

function App() {
    const {getMovies} = useActions();
    const {movies} = useSelector(selectMovies);
    const [visible, open, close] = useFlag();
    const [modal, showModal, closeModal] = useFlag(false);
    const [selectedMovie, selectMovie] = useState(false);
    const [films, sortFilms] = useState(null);
    const [title, setTitle] = useState("");
    const [ID, setID] = useState();
    const [editingMovie, setEditingMovie] = useState(null);

    useEffect(() => {
        getMovies();
    }, [modal]);

  return (
    <Context.Provider
      value={{
        movies,
          films,
          sortFilms,
        ID,
        setID,
        selectedMovie,
        selectMovie,
        changeTitle: setTitle,
        open,
        close,
        modal,
        showModal,
        closeModal,
        editingMovie,
        setEditingMovie,
      }}
    >
      <div className={styles.App}>
        <div className={selectedMovie ? styles.wrapper : styles.defaultWrapper}>
          <div className={styles.inner}>
            <Header />
          </div>
        </div>
        <Content />
        <Footer />
        {visible && <MovieForm title={title} />}
      </div>
    </Context.Provider>
  );
}

export default withErrorBoundary(App, {
  FallbackComponent: ErrorPage,
  onReset: () => null,
});
