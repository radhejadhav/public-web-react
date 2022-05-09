import { object, ref, string } from "yup"

export const loginSchema = object().shape({
    username: string().email().required(),
    password: string().required()
})

export const signupSchema = object().shape({
    email: string().email().required(),
    displayName: string().required(),
    firstName: string().required(),
    lastName: string().required(),
    mobile: string().required(),
    company: string().required(),
    username: string().required(),
    password: string().required(),
    confirmPassword: string()
        .oneOf([ref('password'), null], 'Passwords must match'),
})