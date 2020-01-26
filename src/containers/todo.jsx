import React from 'react'
import { TextInput, SubmitButton, Form, Paper } from '../components'
import { todoSchema as schema } from '../config/validation'

import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../controllers/actions/todo'

const ToDo = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo.todo)

    const onSubmit = data => dispatch(addTodo(data))

    return (
        <div>
            { todos ? todos.map( todo => <p>{todo.id} {todo.todo}</p>) : null }
            <Paper id='form-paper'>
                <h3>New ToDo</h3>
                <Form onSubmit={onSubmit} schema={schema}>
                    <TextInput label='ToDo' name='todo' />
                    <SubmitButton text='Submit' />
                </Form>
            </Paper>
        </div>
    )
}

export default ToDo