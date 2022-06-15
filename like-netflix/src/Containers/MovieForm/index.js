import { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Group from "../../assets/Group.png";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import InputDate from "../../Components/InputDate";
import TextArea from "../../Components/TextArea";
import Select from "../../Components/Select";
import { formData } from "../../data/form";
import { Context } from "../../helpers/context";
import {useActions} from "../../helpers/useActions";
import styles from "./styles.module.css";

const MovieForm = ({ title }) => {
  const {
    movies,
    modal,
    showModal,
    closeModal,
    close,
    ID,
    setID,
    editingMovie,
    setEditingMovie,
    selectMovie,
  } = useContext(Context);

  const {addMovie, editMovie, deleteMovie} = useActions();
  const [form, setForm] = useState(formData);

  const submit = () => {
    if (editingMovie) {
      editMovie(movies.map(movie => {
        if (movie.id === editingMovie.id) {
          return {
            id: editingMovie.id,
            title: form.title.value,
            movieUrl: form.movieUrl.value,
            genre: form.genre.value,
            releaseDate: form.releaseDate.value,
            rating: form.rating.value,
            runtime: form.runtime.value,
            overview: form.overview.value,
          }
        }
        return movie;
      }));
      close();
      setEditingMovie(null);
    } else {
      addMovie({
        id: Math.random(),
        title: form.title.value,
        movieUrl: form.movieUrl.value,
        genre: form.genre.value,
        releaseDate: form.releaseDate.value,
        rating: form.rating.value,
        runtime: form.runtime.value,
        overview: form.overview.value,
      });
      showModal();
    }
  };

  const remove = (id) => {
    deleteMovie(movies.filter((movie) => movie.id !== id))
    selectMovie(false);
    setID(null);
    close();
  };

  useEffect(() => {
    if (editingMovie) {
      const newMovie = {};
      for (let item in form) {
        newMovie[item] = {
          ...form[item],
          value: editingMovie[item],
        };
      }
      setForm(newMovie);
    }
  }, [editingMovie]);

  const changeHandler = (event) => {
    let value = event.target.value;

    if (event.target.id === "releaseDate") {
      value = +value.slice(0, 4);
    }

    setForm({
      ...form,
      [event.target.id]: {
        ...form[event.target.id],
        value: value,
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}></div>
      {modal ? (
        <div className={ID ? styles.delete : styles.success}>
          <Button
            title={"╳"}
            style={ID ? styles.cross3 : styles.cross2}
            click={() => {
              close();
              closeModal();
              setID(null);
            }}
          />
          {ID ? null : <img className={styles.icon} src={Group} alt="icon" />}
          <h1>{ID ? "delete movie" : "congratulations !"}</h1>
          <p>
            {ID
              ? "Are you sure you want to delete this movie?"
              : "The movie has been added to database successfully"}
          </p>
          {ID ? (
            <Button title={"confirm"} style={styles.redBtn} click={() => {
              remove(ID);
            }} />
          ) : null}
        </div>
      ) : (
        <div className={styles.formContainer}>
          <Button
            title={"╳"}
            style={styles.cross}
            click={() => {
              close();
              setID(null);
            }}
          />
          <h1 className={styles.title}>{title}</h1>
          <form
            className={styles.form}
            onSubmit={submit}
            onReset={() => setForm(formData)}
          >
            <div className={styles.formField}>
              <Input
                id={form.title.id}
                label={form.title.label}
                value={form.title.value}
                placeholder={form.title.placeholder}
                style={styles.inputCol1}
                onChange={changeHandler}
              />
              <InputDate
                id={form.releaseDate.id}
                value={form.releaseDate.value}
                label={form.releaseDate.label}
                onChange={changeHandler}
              />
            </div>
            <div className={styles.formField}>
              <Input
                id={form.movieUrl.id}
                label={form.movieUrl.label}
                value={form.movieUrl.value}
                placeholder={form.movieUrl.placeholder}
                style={styles.inputCol1}
                onChange={changeHandler}
              />
              <Input
                id={form.rating.id}
                label={form.rating.label}
                value={form.rating.value}
                placeholder={form.rating.placeholder}
                style={styles.inputCol2}
                onChange={changeHandler}
              />
            </div>
            <div className={styles.formField}>
              <Select
                id={form.genre.id}
                label={form.genre.label}
                value={form.genre.value}
                onChange={changeHandler}
                options={form.genre.options}
                editingMovie={editingMovie}
              />
              <Input
                id={form.runtime.id}
                label={form.runtime.label}
                value={form.runtime.value}
                placeholder={form.runtime.placeholder}
                style={styles.inputCol2}
                onChange={changeHandler}
              />
            </div>
            <TextArea
              id={form.overview.id}
              label={form.overview.label}
              placeholder={form.overview.placeholder}
              value={form.overview.value}
              onChange={changeHandler}
            />
            <div className={styles.btnsContainer}>
              <Button title={"reset"} style={styles.reset} type={"reset"} />
              <Button title={"submit"} style={styles.submit} type={"submit"} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

MovieForm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MovieForm;
