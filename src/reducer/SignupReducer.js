import { COMPANY, CONFIRM_PASSWORD, DISPLAY_NAME, EMAIL_ID, FIELD_ERROR, FIRST_NAME, LAST_NAME, MOBILE, PASSWORD, SET_FIELD_ERROR, SIGNUP_RESPONSE, USER_NAME } from "../shared/ReducerConstant"

const initialState = {
    email: "",
    displayName: "",
    firstName: "",
    lastName: "",
    mobile: "",
    username: "",
    company: "",
    password: "",
    confirmPassword: "",
    fieldError: {},
    signupResponse: {}
}

const SignupReducer = (state = initialState, action) => {

    switch (action.type) {
        case EMAIL_ID:
            return { ...state, email: action.value }
        case FIRST_NAME:
            return { ...state, firstName: action.value }
        case LAST_NAME:
            return { ...state, lastName: action.value }
        case DISPLAY_NAME:
            return { ...state, displayName: action.value }
        case USER_NAME:
            return { ...state, username: action.value }
        case MOBILE:
            return { ...state, mobile: action.value }
        case COMPANY:
            return { ...state, company: action.value }
        case PASSWORD:
            return { ...state, password: action.value }
        case CONFIRM_PASSWORD:
            return { ...state, confirmPassword: action.value }
        case FIELD_ERROR:
            return { ...state, fieldError: { ...state.fieldError, [action.value.name]: action.value.value } }
        case SET_FIELD_ERROR:
            return { ...state, fieldError: { ...undefined } }
        case SIGNUP_RESPONSE:
            return {...state, signupResponse:{...action.value}}
        default:
            return state;
    }
}

export default SignupReducer;