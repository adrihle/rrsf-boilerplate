import React from 'react'

import { useDispatch } from 'react-redux'
import { logout } from '../controllers/actions/logout'

import { TodoForm } from '../containers'
import { SubmitButton } from '../components'

export default function(){
    const dispatch = useDispatch()
    const onClick = () => dispatch(logout())
    return(
        <div style={{textAlign: 'center'}}>
            <TodoForm />
            <SubmitButton text='Logout' onClick={onClick} />
        </div>
    )
}