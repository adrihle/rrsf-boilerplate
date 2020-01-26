import { types } from '../../constants'

export const syncUser = user => ({
    type: types.SYNC_USER,
    user
})

export const syncTodos = todos => ({
    type: types.SYNC_TODOS,
    todos
})