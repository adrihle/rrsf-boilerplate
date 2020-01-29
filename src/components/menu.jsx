import React from 'react'

import { Link } from 'react-router-dom'
import { Menu, MenuItem } from '@material-ui/core'

export default function ({ anchor, onClose, items, logout, id }) {
    
    const close = () => {
        onClose()
        logout()
    }

    return (
        <Menu
            id={id ? id : 'menu'}
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={onClose}
            keepMounted
        >
            {Array.isArray(items) ?
                items.map((item, i) => (
                    item.logout ?
                        <MenuItem onClick={close} key={i}>{item.title}</MenuItem>
                        :
                        <MenuItem to={item.route} component={Link} key={i} onClick={onClose}>{item.title}</MenuItem>
                ))
                :
                null
            }
        </Menu>
    )
}