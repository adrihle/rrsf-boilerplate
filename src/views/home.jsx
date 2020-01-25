import React, { useState, useEffect } from 'react'
import { SubmitButton, Paper, TextInput, Form } from '../components'

import { schema } from '../config/validation'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../controllers/actions/login'

// import firebase from '../config/firebase'

// function FetchData() {
//     const [state, setState]=useState([])

//     useEffect(() => {
//         const unsubscribe = firebase
//             .firestore()
//             .collection('nueva')
//             .onSnapshot(snapshot => {
//                 const value = snapshot.docs.map(doc => ({
//                     id: doc.id,
//                     ...doc.data()
//                 }))
//                 setState(value)
//             })

//         return () => unsubscribe()
//     },[])

//     return state
// }

const Home = () => {
    // const state = FetchData()
    const dispatch = useDispatch()
    const user = useSelector(state => state.login.user)

    const onSubmit = data => {
        // firebase
        //     .firestore()
        //     .collection('nueva')
        //     .add(data)
        console.log(data)
    }

    const onClick = () => {
        dispatch(login())
    }

    return (
        <Paper id='form-paper'>
            <h3>Welcome {user ? user.displayName : ''}</h3>
            {/* { state.map(item => <p key={item.id}>{item.email}</p>)} */}
            <h3>Firebase Form</h3>
            <Form onSubmit={onSubmit} schema={schema}>
                <TextInput label='Username' name='username' />
                <TextInput label='email' name='email' />
                <SubmitButton text='Submit' />
            </Form>
            <button onClick={onClick}>Sign with Facebook</button>
        </Paper>
    )
}

export default Home