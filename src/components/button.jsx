import React from 'react'
import { Button, CircularProgress } from '@material-ui/core'

export default function({ text, id, loading, ...rest }){
    return (
        <Button 
            id={id ? id : 'button'}
            disabled={loading}
            variant='contained'
            type='submit'
            color='primary'
            {...rest}
        >
            {loading ? <CircularProgress size={32} /> : text}
        </Button>
    )
}