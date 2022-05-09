import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileRequest } from '../actions/LoginAction'
import DashboardComponent from '../components/DashboardComponent'

export default function DashboardContainer() {

    const { userProfile } = useSelector(state => state.login)
    const dispatch = useDispatch()

    let {data, isTokenValid} = JSON.parse(sessionStorage.userSession)

    useEffect(() => {
        if(isTokenValid){
            dispatch(profileRequest(data.token))
        }
    },[])

    return (
        <DashboardComponent
            user={userProfile}
        />
    )
}
