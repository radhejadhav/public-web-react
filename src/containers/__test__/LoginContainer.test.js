import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { applyMiddleware, combineReducers, createStore } from "redux"
import LoginReducer from "../../reducer/LoginReducer"
import SignupReducer from "../../reducer/SignupReducer"
import LoginContainer from "../LoginContainer"

describe("Test Login Container", () => {
    let fragment, getText

    beforeEach(() => {
        const { asFragment, getByText } = render(
            <Provider store={createStore(combineReducers({ login: LoginReducer, signup: SignupReducer }))}>
                <BrowserRouter>
                    <LoginContainer />
                </BrowserRouter>
            </Provider>
        )
        fragment = asFragment
        getText=getByText
    })

    it("Should return LoginComponent", () => {
        expect(fragment()).toMatchSnapshot()
    })
    // it("Should validate the first name field", () => {
    //     fireEvent.click(getText("button"))
    // })
})