import { IS_SESSION_VALID, USER_PROFILE } from '../shared/ReducerConstant';

export const setUserProfile = (response) => {
    return {
        type: USER_PROFILE,
        value: {...response}
    }
}

export const setIsSessionValid=(data)=>{

    return {
        type: IS_SESSION_VALID,
        value: data
    }
}

export const setErrors=(data)=>{
    return {
        type:`${data.path}Error`,
        value:data.message
    }
}

export const tokenRequest = (data) => {
    return {
        type: "login",
        value: data
    }
}

export const profileRequest = (data) => {
    return {
        type: "profile",
        value: data
    }
}
