import React from 'react'

import { Paper, TextInput, Form, SubmitButton, Banner } from '../components'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
    const classes = useStyles()
    const onSubmit = data => console.log(data)
    
    return (
        <Card className={classes.card}>
            <Banner upload/>
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