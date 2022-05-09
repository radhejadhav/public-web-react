import { IS_SESSION_VALID, PASSWORD, PASSWORD_ERROR, USERNAME, USERNAME_ERROR, USER_PROFILE } from "../shared/ReducerConstant"

export const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
    userProfile: {},
    isSessionValid: false
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERNAME:
            return { ...state, username: action.value }
        case PASSWORD:
            return { ...state, password: action.value }
        case USERNAME_ERROR:
            return { ...state, usernameError: action.value }
        case PASSWORD_ERROR:
            return { ...state, passwordError: action.value }
        case USER_PROFILE:
            return { ...state, userProfile: action.value }
        case IS_SESSION_VALID:
            return { ...state, isSessionValid: action.value }
        default:
            return state
    }

}

export default LoginReducer;
