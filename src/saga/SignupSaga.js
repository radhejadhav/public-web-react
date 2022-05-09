import { toast } from 'react-toastify';
import { takeLatest,put } from 'redux-saga/effects';
import { setSignupResponse } from '../actions/SignupAction';
import { signupApi } from '../apis/ApiHelper';

function* signupWorker(action){
    try{
        const response = yield signupApi(action.value)
        yield put(setSignupResponse(response))
        toast.success("Registration completed..!", { autoClose: 3000, position: toast.POSITION.TOP_LEFT })
    }catch(error){
        console.log(error)
        toast.error("Opps, Registration has failed.", { autoClose: 3000, position: toast.POSITION.TOP_LEFT })
    }
}

export default function* signupWatcher(){
    yield takeLatest("signup", signupWorker)
}