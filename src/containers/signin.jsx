import React from 'react'
//connecting store
import { useDispatch } from 'react-redux'
import { login, fbLogin } from '../controllers/actions/login'
//components
import { SubmitButton, TextInput, Form, Paper } from '../components'
import { signInSchema as schema } from '../config/validation'
import { FacebookLoginButton } from 'react-social-login-buttons'

const SignIn = () => {
    const dispatch = useDispatch()

    const onSubmit = data => dispatch(login(data))

    const onClick = () => dispatch(fbLogin())

    return (
        <Paper id='form-paper'>
            <Form onSubmit={onSubmit} schema={schema}>
                <TextInput label='Email' name='email' />
                <TextInput label='Password' type='password' name='password' />
                <SubmitButton text='SignIn' />
                <hr/>
            </Form>
            <FacebookLoginButton onClick={onClick} />
        </Paper>
    )
}

export default SignIn