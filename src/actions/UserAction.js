import { PAGE, SIZE, TOTAL_PAGE, USERS_LIST } from "../shared/ReducerConstant"

export const pageRequest = (data) => {
    return {
        type: "getUsersPage",
        value: data
    }
}
export const setUserList = (data) => {
    return {
        type: USERS_LIST,
        value: data
    }
}

export const setPage = (data) => {
    return {
        type:PAGE,
        value: data
    }
}

export const setSize = (data) => {
    return {
        type: SIZE,
        value: data
    }
} 

export const setTotalPage = (data) => {
    return {
        type: TOTAL_PAGE,
        value: data
    }
}