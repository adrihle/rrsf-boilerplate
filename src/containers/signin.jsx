import React from 'react'
//connecting store
import { useDispatch } from 'react-redux'
import { login } from '../controllers/actions/login'
//components
import { SubmitButton, TextInput, Form, Paper } from '../components'
import { signInSchema as schema } from '../config/validation'

const SignIn = () => {
    const dispatch = useDispatch()

    const onSubmit = data => console.log(data)

    const onClick = () => dispatch(login())

    return (
        <Paper id='form-paper'>
            <h3>Sign In to this Awesome App</h3>
            <Form onSubmit={onSubmit} schema={schema}>
                <TextInput label='Email' name='email' />
                <TextInput label='Password' type='password' name='password' />
                <SubmitButton text='Submit' />
            </Form>
            <div style={{textAlign: 'center'}}>
                <h5>Or</h5>
                <SubmitButton onClick={onClick} text='Sign in with Facebook' />
            </div>
        </Paper>
    )
}

export default SignIn