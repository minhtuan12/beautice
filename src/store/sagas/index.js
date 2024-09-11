import {all, fork} from 'redux-saga/effects'
import appSaga from '../slices/app/saga.js';
import routeSaga from '../slices/routing/saga';

export default function* sagas() {
    yield all([
        fork(routeSaga),
        fork(appSaga),
    ]);
}
