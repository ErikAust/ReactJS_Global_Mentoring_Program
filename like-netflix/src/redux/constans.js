export const actionsTypes = {
    GET_MOVIES: 'GET_MOVIES',
    ADD_MOVIE: 'ADD_MOVIE',
    EDIT_MOVIE: 'EDIT_MOVIE',
    DELETE_MOVIE: 'DELETE_MOVIE',
};

export const getSuccessAction = (actionName) => `${actionName}_SUCCESS`;
export const getFailAction = (actionName) => `${actionName}_FAIL`;