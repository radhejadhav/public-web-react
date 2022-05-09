import { FIELD_ERROR, SIGNUP_RESPONSE } from "../shared/ReducerConstant"

export const signupRequest = (data) => {
    return {
        type: "signup",
        value: data
    }
}

export const setErrors=(data)=>{
    return {
        type: FIELD_ERROR,
        value: {
            name: `${data.path}Error`,
            value: data.message
        }
    }
}

export const setFieldsOnChange =(data)=> {
    return {
        type: data.target.name,
        value: data.target.value
    }
}

export const setSignupResponse =(data)=>{
    return {
        type: SIGNUP_RESPONSE,
        value: data
    }
}