import { fork } from 'redux-saga/effects'
import login from './login'
import addTodo from './todo'

export default function* (){
    yield fork(login)
    yield fork(addTodo)
}