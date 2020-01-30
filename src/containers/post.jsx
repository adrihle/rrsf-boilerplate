import React, { useState } from 'react'

import { Paper, TextInput, Form, SubmitButton, Banner } from '../components'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useDispatch, useSelector } from 'react-redux'
import { newPost } from '../controllers/actions/post'

const useStyles = makeStyles({
    card: {
        background: 'none',
        boxShadow: 'none',
        marginTop: '2em'
    },
    inputs: {
        marginBottom: '1.5em'
    }
})

export default function (){
    const [image, setImage]=useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    const author = useSelector(state => state.login.user.displayName)

    const getImage = img => {
        setImage(img)
        console.log(img)
    }

    const onSubmit = data => {
        data.author = author
        data.date = Date(Date.now()).toString()
        const datos = {
            post: data,
            image: image
        }
        dispatch(newPost(datos))
    }
    
    return (
        <Card className={classes.card}>
            <Banner upload getImage={getImage}/>
            <Paper>
                <Form onSubmit={onSubmit}>
                    <TextInput label='Title' name='title' className={classes.inputs}/>
                    <TextInput label='Content' name='content' multiline rows='6' variant='outlined' />
                    <SubmitButton text='Post' />
                </Form>
            </Paper>
        </Card>
    )
}