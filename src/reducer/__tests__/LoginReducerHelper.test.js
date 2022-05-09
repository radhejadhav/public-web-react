import LoginReducer, { initialState } from '../LoginReducer'

describe("Login Reducer", () => {
    it("Should return default state", () => {
        expect(LoginReducer(initialState, {})).toEqual(initialState)
    })
    it("Should return given action", () => {
        expect(LoginReducer({},{type:"username",value:"test"})).toEqual({username:"test"})
    })
})