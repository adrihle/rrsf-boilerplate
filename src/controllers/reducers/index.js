import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login'
import posts from './post'

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    login,
    posts
})

export default rootReducer