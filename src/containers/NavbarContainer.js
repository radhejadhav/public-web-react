import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import NavbarComponent from '../components/NavbarComponent'
import { confirmAlert } from 'react-confirm-alert';
import ConfirmBoxComponent from '../components/ConfirmBoxComponent';
import { HOME, LOGIN } from '../shared/RouterConstant';
import { toast } from 'react-toastify';
import { setIsSessionValid } from '../actions/LoginAction';

export default function NavbarContainer() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { isSessionValid } = useSelector(dt => dt.login)

    let user = {
        data: {
            expiredInHr: 0,
            token: "",
            username: ""
        },
        error: "",
        isTokenValid: false,
        status: "",
        statusCode: 0
    }

    let { data } = JSON.parse(sessionStorage.getItem('userSession'));

    const onConfirm = () => {
        sessionStorage.setItem('userSession', JSON.stringify(user))
        dispatch(setIsSessionValid(false))
        navigate(HOME)
        toast.error("Logged Out..!", { autoClose: 3000, position: toast.POSITION.TOP_LEFT })
    }

    const logout = () => {

        if (isSessionValid) {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <ConfirmBoxComponent
                            onClose={onClose}
                            onConfirm={onConfirm}
                        />
                    );
                }
            });
        } else {
            navigate(LOGIN)
        }
    }

    return (
        <NavbarComponent
            userSessions={isSessionValid}
            username={data.username}
            logout={logout}
        />
    )
}
