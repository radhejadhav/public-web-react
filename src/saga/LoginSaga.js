import { toast } from 'react-toastify';
import { takeLatest, put, call } from 'redux-saga/effects';
import { setIsSessionValid, setUserProfile } from '../actions/LoginAction';
import { profileApi, tokenApi } from '../apis/ApiHelper';

//worker saga
export function* loginWorker(actions) {
    try {
        const {data} = yield call(tokenApi, actions.value)//(actions.value)
        data.isTokenValid = true
        sessionStorage.setItem("userSession",JSON.stringify(data))
        yield put(setIsSessionValid(true))
        toast.success("Login Successfull..!", { autoClose: 3000, position: toast.POSITION.TOP_LEFT })

    } catch (error){
        console.log(error)
        toast.error(`Login failed, Please check credentials. ${error.message}`, {autoClose:3000, position: toast.POSITION.TOP_LEFT})
    }
}

export function* getProfileWorker(action){
    try {
        const {data} = yield call(profileApi, action.value)
        yield put(setUserProfile(data.data))
    } catch (error) {
        console.log(error)
        toast.error(`Unable to get user profile ${error.message}`, {autoClose:3000, position: toast.POSITION.TOP_LEFT})

    }
}

//watcher saga
export default  function* loginWatcher() {
    yield takeLatest("login", loginWorker);
}

export function* getProfileWatcher(){
    yield takeLatest("profile", getProfileWorker)
}