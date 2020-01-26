import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers'
import rootSaga from './sagas'

export const history = createBrowserHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initializeSagaMiddleware = createSagaMiddleware()

const composition = composeEnhancers(
    applyMiddleware(initializeSagaMiddleware, routerMiddleware(history))
)

const store = createStore(
    rootReducer(history),
    composition
)

initializeSagaMiddleware.run(rootSaga)

export default store