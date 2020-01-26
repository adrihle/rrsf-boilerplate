import { types } from '../../constants'

const initialState = {
    todo: null,
    loading: false,
    status: null,
    message: null
}

export default function(state = initialState, action){

    switch (action.type){
        case types.ADD_TODO.REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.ADD_TODO.SUCCESS:
            return {
                ...state,
                loading: false,
                status: 'success',
            }
        case types.ADD_TODO.FAILURE:
            return {
                ...state,
                loading: false,
                status: 'failure',
                message: action.err.message
            }
        case types.SYNC_TODOS:
            return {
                ...state,
                loading: false,
                status: 'success',
                todo: action.todos
            }
        default: 
            return state
    }

}