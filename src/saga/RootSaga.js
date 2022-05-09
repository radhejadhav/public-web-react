import { all } from 'redux-saga/effects';
import loginWatcher, { getProfileWatcher } from './LoginSaga'
import signupWatcher from './SignupSaga'
import { userSagaWatcher } from './UserSaga';

export default function* RootSaga() {
    yield all([
        signupWatcher(),
        loginWatcher(),
        getProfileWatcher(),
        userSagaWatcher()
    ])
}
