import { takeLatest, call, put, take, fork } from 'redux-saga/effects'

import { addTodoSuccess, addTodoFailure } from '../actions/todo'
import { syncTodos } from '../actions/sync'
import { types } from '../../constants'

import { collectionTransformer } from '../../helpers'

import rsf from '../../config/firebase'

function* addTodoSaga({payload}){
    try {
        const data = yield call(rsf.firestore.addDocument, 'todos', payload)
        yield put(addTodoSuccess(data))
    } catch (err) {
        yield put(addTodoFailure(err))
    }
}

function* syncTodosSaga(){
    yield fork(rsf.firestore.syncCollection, 'todos', {
        successActionCreator: syncTodos,
        transform: collectionTransformer
    })
}

export default function* (){
    yield fork(syncTodosSaga)
    yield takeLatest(types.ADD_TODO.REQUEST, addTodoSaga)
}



