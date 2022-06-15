import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "./rootReducer";
import {rootSaga} from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancers = applyMiddleware(sagaMiddleware);

const enhancers = [middlewareEnhancers];
const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);
