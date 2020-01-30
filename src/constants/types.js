import { createTypes } from '../helpers'

const types = {
    SYNC_USER: 'SYNC_USER',
    SYNC_POSTS: 'SYNC_POSTS',

    LOGIN: createTypes('LOGIN'),
    FB_LOGIN: createTypes('FB_LOGIN'),
    REGISTER: createTypes('REGISTER'),
    LOGOUT: createTypes('LOGOUT'),
    
    ADD_POST: createTypes('ADD_POST'),
    ADD_TODO: createTypes('ADD_TODO')
}

export default types