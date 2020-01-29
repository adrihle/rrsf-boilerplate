import * as yup from 'yup'

export const todoSchema = yup.object().shape({
    todo: yup.string()
})

export const signInSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export const signUpSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    repite: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})