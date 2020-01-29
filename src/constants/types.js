import { createTypes } from '../helpers'

const types = {
    SYNC_USER: 'SYNC_USER',
    SYNC_TODOS: 'SYNC_TODOS',

    LOGIN: createTypes('LOGIN'),
    FB_LOGIN: createTypes('FB_LOGIN'),
    REGISTER: createTypes('REGISTER'),
    LOGOUT: createTypes('LOGOUT'),
    
    ADD_TODO: createTypes('ADD_TODO')
}

export default types