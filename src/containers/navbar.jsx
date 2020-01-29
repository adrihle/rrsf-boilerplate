import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../controllers/actions/login'

import { Avatar, GoBack, NavBar, Menu } from '../components'
import { userMenu, noUserMenu } from '../config/menu'
import logo from '../public/images/logoapp.png'

export default function ({ history }) {
    const [anchor, setAnchor]=useState(null)
    const login = useSelector(state => state.login)

    const dispatch = useDispatch()

    const out = () => {
        dispatch(logout())
    }

    const goBack = () => {
        history.push('/')
    }

    const openCloseMenu = e => {
        if (anchor) return setAnchor(null)
        else return setAnchor(e.currentTarget)
    }

    return (
        <React.Fragment>
            <NavBar>
                <GoBack logo={logo} main onClick={goBack} />
                <Avatar 
                    navbar 
                    onClick={openCloseMenu} 
                    loading={login.loading}
                    url={login.user ? login.user.photoURL : null}
                />
            </NavBar>
            <Menu 
                anchor={anchor} 
                onClose={openCloseMenu} 
                items={login.auth ? userMenu : noUserMenu} 
                logout={out}
            />
        </React.Fragment>
    )
}