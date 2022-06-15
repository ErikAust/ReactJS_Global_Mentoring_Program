import axios from 'axios';

const API_URL = 'https://like-netflix-default-rtdb.firebaseio.com/movies.json';

export const getMovies = () => axios.get(API_URL);
export const addMovie = (movie) => axios.post(API_URL, movie);
export const editMovie = (movies) => axios.put(API_URL, movies);
export const deleteMovie = (movies) => axios.put(API_URL, movies);