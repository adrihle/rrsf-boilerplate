import { types } from '../../constants'

const initialState = {
    loading: false,
    auth: false,
    user: null,
    message: null
}

export default function (state = initialState, action){
    
    switch (action.type){

        case types.LOGIN.REQUEST:
            return {
                ...state,
                loading: true,
                message: null
            }

        case types.LOGIN.SUCCESS:
            return {
                ...state,
                loading: false,
                auth: true
            }
        
        case types.LOGIN.FAILURE:
            return {
                ...state,
                loading: false,
                message: action.error.message
            }

        case types.SYNC_USER:
            return {
                ...state,
                auth: action.user != null,
                user: action.user
            }

        default: 
            return state
    }
}