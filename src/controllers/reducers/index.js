import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login'
import todo from './todo'

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    login,
    todo
})

export default rootReducer