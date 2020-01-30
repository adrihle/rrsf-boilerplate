import { types } from '../../constants'

export const newPost = data => ({
    type: types.ADD_POST.REQUEST,
    data
})

export const newPostSuccess = () => ({
    type: types.ADD_POST.SUCCESS
})

export const newPostFailure = err => ({
    type: types.ADD_POST.FAILURE,
    err
})