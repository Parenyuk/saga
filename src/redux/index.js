import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducer from './reducers'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
        compose (
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__  ?  window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    )

sagaMiddleware.run(rootSaga) 

export default store;