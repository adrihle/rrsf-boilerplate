import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initializeSagaMiddleware = createSagaMiddleware()

const composition = composeEnhancers(
    applyMiddleware(initializeSagaMiddleware)
)

const store = createStore(
    rootReducer,
    composition
)

initializeSagaMiddleware.run(rootSaga)

export default store