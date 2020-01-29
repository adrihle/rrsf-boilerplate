import React, { useState } from 'react'

import { Avatar, IconButton, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import UserIcon from '../public/images/add-image.png'

const useStyles = makeStyles({
    avatar: {
        margin: 10
    },
    mediumAvatar: {
        margin: 10,
        width: 80,
        height: 80
    },
    bigAvatar: {
        margin: 10,
        width: 150,
        height: 150
    },
    root: {
        padding: 0.15
    }
})

const UserAvatar = ({ alt, url, id, upload, navbar, onClick, getImage, loading, ...rest }) => {
    const [image, setImage] = useState(null)
    const classes = useStyles()

    const onChange = e => {
        getImage(e)
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <IconButton component='label' id={id} onClick={onClick} aria-haspopup='true' className={classes.root}>
            {upload ?
                <input type='file' onChange={onChange} style={{ display: 'none' }} />
                :
                null
            }
            {loading ?
                <CircularProgress />
                :
                <Avatar
                    className={navbar ? classes.avatar : classes.mediumAvatar}
                    alt={alt}
                    src={url || image ? url || image : UserIcon}
                    {...rest}
                />
            }
        </IconButton>
    )
}

export default UserAvatar