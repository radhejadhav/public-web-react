import { PAGE, SIZE, TOTAL_PAGE, USERS_LIST } from "../shared/ReducerConstant"

const initialState = {
    page: 0,
    size: 3,
    totalPage:0,
    userList: []
}

const UserListReducer = (state = initialState, action) => {

    switch (action.type) {

        case PAGE:
            return {...state, page:action.value}
        case SIZE:
            return {...state, size:action.value}
        case TOTAL_PAGE:
            return {...state, totalPage:action.value}
        case USERS_LIST:
            return {...state, userList:action.value}
        default:
            return state    
    }
}
export default UserListReducer;