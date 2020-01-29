import React from 'react'
import { Paper } from '@material-ui/core'

export default ({ children, id }) => (
    <Paper elevation={3} id={id ? id : 'form-paper'}>
        {Array.isArray(children)
            ? children.map(child => {
                return child
            })
            : children
        }
    </Paper>
)
