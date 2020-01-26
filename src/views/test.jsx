import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { logout } from '../controllers/actions/logout'
import { SubmitButton } from '../components'

const Test = () => {
    const user = useSelector(state => state.login.user)
    const dispatch = useDispatch()

    return (
        <div>
            {user ?
                <div style={{textAlign: 'center'}}>
                    <img src={user.photoURL} alt=''></img>
                    <h3>Welcome {user.displayName}</h3>
                    <SubmitButton onClick={() => dispatch(logout())} text='Logout' />
                </div>
                :
                <h3>Please sign in with your prefered social media account</h3>
            }
        </div>
    )
}

export default Test