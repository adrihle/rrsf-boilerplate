import { types } from '../../constants'

export const syncUser = user => ({
    type: types.SYNC_USER,
    user
})