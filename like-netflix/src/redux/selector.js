import {createSelector} from 'reselect';

const getMovies = (state) => state.movies;

export const selectMovies = createSelector(
    getMovies,
    (moviesState) => ({
        ...moviesState,
    })
);
