import React from 'react'
import { TextField } from '@material-ui/core'

export default function ({ register, errors, name, type, id, ...rest }){
    return(
        <TextField
            id={id ? id: 'text-input'}
            error={errors[name] ? true : false}
            helperText={errors[name] && errors[name].message}
            name={ name }
            type={ type }
            inputRef={ register }
            {...rest}
        />
    )
}