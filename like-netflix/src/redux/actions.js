import {actionsTypes} from './constans'

export const getMovies = () => ({
    type: actionsTypes.GET_MOVIES,
});

export const addMovie = (movie) => ({
    type: actionsTypes.ADD_MOVIE,
    payload: movie,
});

export const editMovie = (movies) => ({
    type: actionsTypes.EDIT_MOVIE,
    payload: movies,
});

export const deleteMovie = (movies) => ({
    type: actionsTypes.DELETE_MOVIE,
    payload: movies,
});
