import {actionsTypes, getSuccessAction, getFailAction} from './constans';
import {combineReducers} from "redux";

export const initialState = {
    movies: [],
    isLoading: false,
    error: null,
}


const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsTypes.GET_MOVIES:
        case actionsTypes.ADD_MOVIE:
        case actionsTypes.EDIT_MOVIE:
        case actionsTypes.DELETE_MOVIE:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case getSuccessAction(actionsTypes.GET_MOVIES):
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
            };

        case getSuccessAction(actionsTypes.ADD_MOVIE):
            return {
                ...state,
                movies: [...state.movies, action.payload],
                isLoading: false,
            };

        case getSuccessAction(actionsTypes.EDIT_MOVIE):
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
            };

        case getSuccessAction(actionsTypes.DELETE_MOVIE):
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
            };

        case getFailAction(actionsTypes.GET_MOVIES):
        case getFailAction(actionsTypes.ADD_MOVIE):
        case getFailAction(actionsTypes.EDIT_MOVIE):
        case getFailAction(actionsTypes.DELETE_MOVIE):
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };

        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    movies: moviesReducer,
})