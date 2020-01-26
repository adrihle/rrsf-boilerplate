import { types } from '../../constants'

export const addTodo = payload => ({
    type: types.ADD_TODO.REQUEST,
    payload
})

export const addTodoSuccess = confirm => ({
    type: types.ADD_TODO.SUCCESS,
    confirm
})

export const addTodoFailure = err => ({
    type: types.ADD_TODO.FAILURE,
    err
})