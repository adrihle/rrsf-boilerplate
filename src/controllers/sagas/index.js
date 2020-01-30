import { fork } from 'redux-saga/effects'
import login from './login'
import addPost from './post'
import register from './register'

export default function* (){
    yield fork(login)
    yield fork(register)
    yield fork(addPost)
}