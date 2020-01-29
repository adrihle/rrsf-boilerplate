import React from 'react'
import { AppBar, Toolbar, useScrollTrigger, Slide } from '@material-ui/core'

export default function ({ children }) {
    return (
        <Slide appear={false} direction='down' in={!useScrollTrigger()} id='slide-navbar'>
            <AppBar position='sticky' id='navbar'>
                <Toolbar id='navbar-content'>
                    {Array.isArray(children)
                        ? children.map(child => {
                            return child
                        })
                        : children
                    }
                </Toolbar>
            </AppBar>
        </Slide>
    )
}