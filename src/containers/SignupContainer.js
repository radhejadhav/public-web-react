import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { setErrors, setFieldsOnChange, signupRequest } from '../actions/SignupAction';
import { getSignupPayload } from '../apis/RequestPayload';
import SignupComponent from '../components/SignupComponent';
import { SET_FIELD_ERROR } from '../shared/ReducerConstant';
import { LOGIN } from '../shared/RouterConstant';
import { signupSchema } from '../validation/ValidationSchema';

export default function SignupContainer() {

  const data = useSelector(data => data.signup)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onChangeHandler = (event) => {
    dispatch(setFieldsOnChange(event))
  }
  
  const onSubmitHandler = () => {
    dispatch({ type: SET_FIELD_ERROR })
    signupSchema.validate(data, { abortEarly: false })
    .then(d => {
      dispatch(signupRequest(getSignupPayload(data)))
    })
    .catch(error => {
      error.inner.forEach(element => {
        dispatch(setErrors(element))
      });
    })
  }

  useEffect(()=>{
    if(data.signupResponse.status === 202){
      navigate(LOGIN)
    }
  },[data])

  return (
    <SignupComponent
      errors={data.fieldError}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  )
}
