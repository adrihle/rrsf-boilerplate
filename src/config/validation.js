import * as yup from 'yup'

export const todoSchema = yup.object().shape({
    todo: yup.string()
})

export const signInSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})