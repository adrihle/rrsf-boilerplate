import { takeLatest, call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import rsf from '../../config/firebase'

import { registerSuccess, registerFailure } from '../actions/register'
import { types, routes } from '../../constants'

function* uploadImage(image){
    return yield call(rsf.storage.uploadFile,`avatars/${image.name}`, image)
}

function* newUserSaga(data){
    try {
        const user = yield call(rsf.auth.createUserWithEmailAndPassword, data.user.email, data.user.password)
        if (user){
            const upload = yield uploadImage(data.user.image)
            if (upload){
                const url = yield call(rsf.storage.getDownloadURL, `avatars/${data.user.image.name}` )
                if (url){
                    yield call(rsf.auth.updateProfile, {
                        displayName: data.user.username,
                        photoURL: url
                    })
                    yield put(registerSuccess())
                    yield put(push(routes.APP.LANDING))
                }
            }
        }
    } catch (err) {
        yield put(registerFailure(err))
    }
}

export default function* (){
    yield takeLatest(types.REGISTER.REQUEST, newUserSaga)
}