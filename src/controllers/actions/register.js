import { types } from '../../constants'

export const register = user => ({
    type: types.REGISTER.REQUEST,
    user
})

export const registerSuccess = () => ({
    type: types.REGISTER.SUCCESS
})

export const registerFailure = err => ({
    type: types.REGISTER.FAILURE,
    err
})