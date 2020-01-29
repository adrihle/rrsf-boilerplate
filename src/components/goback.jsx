import React from 'react'

import { IconButton } from '@material-ui/core'


const GoBackButton = ({ id, main, logo, onClick }) => {
    return (
        <IconButton component='label' id={id} onClick={onClick} aria-haspopup="true">
            { main ?
                <img src={logo} alt='' />
                :
                <i className="fas fa-chevron-left"></i>
            }
        </IconButton>
    )
}

export default GoBackButton