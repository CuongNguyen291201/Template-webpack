import { liveGameModuleSaga } from '@/modules/livegame/src/redux/saga';
import { all, fork } from 'redux-saga/effects';


export const classesManagerSaga = function* root() {
    yield all([
        fork(liveGameModuleSaga)
    ]);
};
