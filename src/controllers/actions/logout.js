import { types } from '../../constants'

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