import { types } from '../../constants'

export const login = () => ({
    type: types.LOGIN.REQUEST
})

export const loginSuccess = credential => ({
    type: types.LOGIN.SUCCESS,
    credential
})

export const loginFailure = err => ({
    type: types.LOGIN.FAILURE,
    err
})