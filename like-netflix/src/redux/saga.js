import {call, put, takeEvery, all} from 'redux-saga/effects';
import {actionsTypes, getSuccessAction, getFailAction} from './constans';
import {getMovies, addMovie, editMovie, deleteMovie} from './api';
import {transform} from "../helpers/transformData";

function* getMoviesSaga() {
    try {
        const response = yield call(getMovies);

        yield put({
            type: getSuccessAction(actionsTypes.GET_MOVIES),
            payload: transform(response.data),
        });
    } catch (error) {
        yield put({
            type: getFailAction(actionsTypes.GET_MOVIES),
            error,
        })
    }
}

function* addMovieSaga(action) {
    try {
        const response = yield call(addMovie, action.payload);

        yield put({
            type: getSuccessAction(actionsTypes.ADD_MOVIE),
            payload: response.data,
        });
    } catch (error) {
        yield put({
            type: getFailAction(actionsTypes.ADD_MOVIE),
            error,
        })
    }
}

function* editMovieSaga(action) {
    try {
        const response = yield call(editMovie, action.payload);

        yield put({
            type: getSuccessAction(actionsTypes.EDIT_MOVIE),
            payload: response.data,
        });
    } catch (error) {
        yield put({
            type: getFailAction(actionsTypes.EDIT_MOVIE),
            error,
        })
    }
}

function* deleteMovieSaga(action) {
    try {
        const response = yield call(deleteMovie, action.payload);

        yield put({
            type: getSuccessAction(actionsTypes.DELETE_MOVIE),
            payload: response.data,
        });
    } catch (error) {
        yield put({
            type: getFailAction(actionsTypes.DELETE_MOVIE),
            error,
        })
    }
}

function* watchSaga() {
    yield takeEvery(actionsTypes.GET_MOVIES, getMoviesSaga);
    yield takeEvery(actionsTypes.ADD_MOVIE, addMovieSaga);
    yield takeEvery(actionsTypes.EDIT_MOVIE, editMovieSaga);
    yield takeEvery(actionsTypes.DELETE_MOVIE, deleteMovieSaga);
}

export function* rootSaga() {
    yield all([
        watchSaga(),
    ])
}

