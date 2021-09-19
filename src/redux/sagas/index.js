import {actionChannel, all, apply, call, spawn, take} from 'redux-saga/effects';
import loadBasicData from './initialSagas'
import pageLoaderSaga from "./pageLoaderSaga";

export function* fetchPlanets() {
    const response = yield call(fetch, 'https://swapi.dev/api/planets', );

    const data = yield apply(response, response.json)

    console.log('LOAD DATA BY CLICK', data)
}

export function* loadOnAction() {
    // yield takeLatest('LOAD_SOME_DATA', fetchPlanets)
    // let task;
    // let abortController = new AbortController();
    //
    // while(true) {
    //     yield take('LOAD_SOME_DATA');
    //     if(task) {
    //         abortController.abort();
    //         yield cancel(task);
    //         abortController = new AbortController();
    //     }
    //    task = yield fork(fetchPlanets, abortController.signal);
    // }
    const channel = yield actionChannel('LOAD_SOME_DATA')
    while(true) {
        yield take(channel)

        yield call(fetchPlanets)
    }
}


export default function* rootSaga () {

const sagas = [loadBasicData, pageLoaderSaga, loadOnAction]

const retrySaga = yield sagas.map(saga => {
    return spawn(function*(){
        while(true) {
            try {
                yield call(saga);
                break
            } catch(e) {
                console.log(e)
            }
        }
    })
})
yield all(retrySaga);
} 