import { createTypes } from '../helpers'

const types = {
    SYNC_USER: 'SYNC_USER',
    SYNC_TODOS: 'SYNC_TODOS',
    LOGIN: createTypes('LOGIN'),
    LOGOUT: createTypes('LOGOUT'),
    ADD_TODO: createTypes('ADD_TODO')
}

export default types