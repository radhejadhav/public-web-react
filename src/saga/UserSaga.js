import { takeLatest, put, call } from 'redux-saga/effects';
import { setTotalPage, setUserList } from '../actions/UserAction';
import { getPageApi } from '../apis/ApiHelper';

export function* userSagaWorker(action) {

    try {
        const { data } = yield call(getPageApi, action.value)
        yield put(setTotalPage(data.totalPages))
        yield put(setUserList(data.content))
    
    } catch (error) {

        console.log(error)
    }



}
export function* userSagaWatcher() {
    yield takeLatest("getUsersPage", userSagaWorker)
}