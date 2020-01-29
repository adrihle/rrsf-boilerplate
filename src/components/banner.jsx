import React, { useState } from 'react'

import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import banner from '../public/images/upload-cloud-flat.png'

const useStyles = makeStyles({
    media: {
        width: '100%',
        height: '100%',
        marginRight: '1em'
    },
    root: {
        width: '100%'
    }
})

export default function ({ upload, getImage }) {
    const [image, setImage] = useState(banner)
    const classes = useStyles()

    const onChange = e => setImage(URL.createObjectURL(e.target.files[0]))

    return (
        <React.Fragment>
            <IconButton component='label' aria-haspopup='true' className={classes.root}>
                {upload ?
                    <input type='file' onChange={onChange} style={{ display: 'none' }} />
                    :
                    null
                }
                <img src={image} alt='' className={classes.media} />
            </IconButton>
        </React.Fragment>
    )
}