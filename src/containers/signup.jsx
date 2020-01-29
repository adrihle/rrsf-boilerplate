import React, { useState } from 'react'
import { Form, SubmitButton, TextInput, Avatar, Paper, Checked } from '../components'

import { signUpSchema as schema } from '../config/validation'
import { useDispatch } from 'react-redux'
import { register } from '../controllers/actions/register'

const SignUp = () => {
    const [image, setImage]=useState(null)
    const [checked, setChecked]=useState(false)
    const dispatch = useDispatch()

    const getImage = e => {
        setImage(e.target.files[0])
    }

    const onSubmit = data => {
        if (image) {
            data.image = image
        }
        dispatch(register(data))
    }

    return (
        <Paper>
            <Avatar upload getImage={getImage} id='signup-avatar' />
            <Form onSubmit={onSubmit} schema={schema}>
                <TextInput label='Username' name='username' />
                <TextInput label='Email' name='email' />
                <TextInput label='Password' type='password' name='password' />
                <TextInput label='Repite Password' type='password' name='repite' />
                <Checked setChecked={setChecked} label='Terms & Conditions' />
                <SubmitButton text='Signup' disabled={!checked}/>
            </Form>
        </Paper>
    )
}

export default SignUp