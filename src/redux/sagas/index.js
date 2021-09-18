import {takeEvery, put, call, fork, spawn } from 'redux-saga/effects';

// async function getPeople() {
//     const request = await fetch('https://swapi.dev/api/people');
//     const data = await request.json();
//     return data
// }


async function swapiGet(pattern) {
    const request = await fetch(`https://swapi.dev/api/${pattern}`);
    const data = await request.json();
    return data
}

export function* loadPeople() {
    const people = yield call(swapiGet, 'people');
    yield put({type: 'SET_PEOPLE', payload: people.results});
    console.log('load planets');
}
export function* loadPlanets() {
    const planets = yield call(swapiGet, 'planets');
    yield put({type: 'SET_PLANETS', payload: planets.results});
    console.log('load people');
}

export function* workerSaga () {
//    const people = yield call(swapiGet, 'people');
//    console.log('people:', people); 
//    const planets = yield call(swapiGet, 'planets');
//    console.log('planets:', planets);
//    yield put({type: 'SET_PEOPLE', payload: people.results})
//    yield put({type: 'SET_PLANETS', payload: planets.results})
console.log('run parallel');
yield spawn(loadPeople);
yield spawn(loadPlanets);
console.log('finish parallel');
}
export function* watchLoadDataSaga() {
    yield takeEvery('LOAD_DATA', workerSaga)
}

export default function* rootSaga () {
   yield  watchLoadDataSaga();
} 