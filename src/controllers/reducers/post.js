import { types } from '../../constants'

const initialState = {
    loading: false,
    posts: null,
    message: null
}

export default function (state = initialState, action){
    switch (action.type){

        case types.ADD_POST.REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case types.ADD_POST.SUCCESS:
            return {
                ...state,
                loading: false
            }
        
        case types.ADD_POST.FAILURE:
            return {
                ...state,
                loading: false,
                message: action.err.message
            }

        case types.SYNC_POSTS:
            return {
                ...state,
                loading: false,
                posts: action.posts
            }
        
        default:
            return state
    }
}