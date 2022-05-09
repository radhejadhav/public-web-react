import React, { useEffect } from 'react'
import LoginComponent from '../components/LoginComponent'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setErrors, tokenRequest } from '../actions/LoginAction'
import { loginSchema } from '../validation/ValidationSchema';
import { HOME } from '../shared/RouterConstant';

export default function LoginContainer() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const data = useSelector(state => state.login)

    const { username, password, isSessionValid } = data;

    const onSubmitHandler = () => {
        loginSchema.isValid({ username, password }).then((valid) => {
            if (valid) {
                dispatch(tokenRequest({ username, password }))
            } else {
                loginSchema.validate({ username, password }, { abortEarly: false })
                    .catch(err => {
                        err.inner.forEach(element => {
                            dispatch(setErrors(element))
                        });
                    })
            }
        })
    }

    useEffect(()=>{
        if(isSessionValid){
            navigate(HOME)
        }
    },[isSessionValid])

    const onChangeHandler = (event) => {
        dispatch({ type: "usernameError", value: "" })
        dispatch({ type: "passwordError", value: "" })
        dispatch({ type: event.target.name, value: event.target.value })
        loginSchema.validate({ username, password }, { abortEarly: false })
            .catch(err => {
                err.inner.forEach(element => {
                    dispatch(setErrors(element))
                });
            })
    } 

    return (
        <LoginComponent
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onSubmitHandler}
            dispatch={dispatch}
            state={data}
        />
    )
}
