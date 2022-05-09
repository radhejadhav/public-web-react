import { loginApi, profileApi } from "../../apis/ApiHelper";
import { loginWorker } from "../LoginSaga"
import { setTokenResponse, setUserProfile, tokenRequest } from "../../actions/LoginAction"
import { takeLatest, put, call } from 'redux-saga/effects';


describe("Should Test LoginSaga", () => {

    let itr, action;
    const response = {
        data: {
            token: "test_token",
            status: "tested",
            statusCode: "123"
        }
    }
    const profileRes = {
        data: {
            name:"test",
            email: "test@gmail.com"
        }
    }

    beforeEach(() => {
        action = tokenRequest({ username: "test@gmail.com", password: "test123" })
        itr = loginWorker(action)
    })
    it("should call token api", () => {
        expect(itr.next().value).toEqual(call(loginApi, action.value))
    })
    it("should dispatch response", () => {
        itr.next()
        expect(itr.next(response).value).toEqual(put(setTokenResponse(response.data)))
        expect(itr.next().done).toEqual(true)
    })
    it("Should call Profile api",() =>{
        itr.next()
        itr.next()
        expect(itr.next().value).toEqual(call(profileApi, response.data.token).data)
    })

     it.skip("Should dispatch profile response",() => {
        expect(itr.next().done).toEqual(false)
        expect(itr.next().done).toEqual(false)
        expect(itr.next().done).toEqual(false)
        expect(itr.next(profileRes).value).toEqual(put(setUserProfile(profileRes.data)))
        
    })
})