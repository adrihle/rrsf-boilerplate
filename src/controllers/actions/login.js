import { types } from '../../constants'

export const login = (user) => ({
    type: types.LOGIN.REQUEST,
    user
})

export const loginSuccess = credential => ({
    type: types.LOGIN.SUCCESS,
    credential
})

export const loginFailure = err => ({
    type: types.LOGIN.FAILURE,
    err
})

export const fbLogin = () => ({
    type: types.FB_LOGIN.REQUEST
})

export const fbLoginSuccess = () => ({
    type: types.FB_LOGIN.SUCCESS
})

export const fbLoginFailure = err => ({
    type: types.FB_LOGIN.FAILURE,
    err
})

export const logout = () => ({
    type: types.LOGOUT.REQUEST
})

export const logoutSuccess = () => ({
    type: types.LOGOUT.SUCCESS
})

export const logoutFailure = err => ({
    type: types.LOGOUT.FAILURE,
    err
})