import React, { useState } from 'react'
import { TextInput, SubmitButton, Form, Paper, Avatar } from '../components'
import { todoSchema as schema } from '../config/validation'

import { useDispatch } from 'react-redux'
import { addTodo } from '../controllers/actions/todo'

const ToDo = () => {
    const dispatch = useDispatch()
    const [image, setImage]=useState(null)

    const onSubmit = data => dispatch(addTodo(data))

    const getImage = img => setImage(img)

    return (
        <div>
            <Paper>
                <h3>New ToDo</h3>
                <Avatar upload getImage={getImage}/>
                <Form onSubmit={onSubmit} schema={schema}>
                    <TextInput label='ToDo' name='todo' />
                    <SubmitButton text='Submit' />
                </Form>
            </Paper>
        </div>
    )
}

export default ToDo