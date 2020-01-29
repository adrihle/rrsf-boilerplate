import { fork } from 'redux-saga/effects'
import login from './login'
import addTodo from './todo'
import register from './register'

export default function* (){
    yield fork(login)
    yield fork(addTodo)
    yield fork(register)
}