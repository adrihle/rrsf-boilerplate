import { types } from '../../constants'

export const syncUser = user => ({
    type: types.SYNC_USER,
    user
})

export const syncPosts = posts => ({
    type: types.SYNC_POSTS,
    posts
})