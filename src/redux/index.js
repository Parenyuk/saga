import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducer from './reducers'
import rootSaga from './sagas';
import {routerMiddleware} from "connected-react-router";
import { history } from './reducers/index'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
        compose (
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__  ?  window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    )

sagaMiddleware.run(rootSaga) 

export default store;