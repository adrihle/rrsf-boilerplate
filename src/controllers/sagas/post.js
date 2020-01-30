import { takeLatest, call, put, fork } from 'redux-saga/effects'

import rsf from '../../config/firebase'
import { newPostSuccess, newPostFailure } from '../actions/post'
import { syncPosts } from '../actions/sync'
import { types, routes } from '../../constants'

import { collectionTransformer } from '../../helpers' 

function* newPost({data}){
    try {
        yield call(rsf.storage.uploadFile, `banners/${data.image.name}`, data.image)
        data.post.imageURL = yield call(rsf.storage.getDownloadURL, `banners/${data.image.name}`)
        yield call(rsf.firestore.addDocument, 'posts', data.post)
        yield put(newPostSuccess())
    } catch (err) {
        yield put(newPostFailure(err))
    }
}

function* syncPostsSaga(){
    yield fork(rsf.firestore.syncCollection, 'posts', {
        successActionCreator: syncPosts,
        transform: collectionTransformer
    })
}

export default function* (){
    yield fork(syncPostsSaga)
    yield takeLatest(types.ADD_POST.REQUEST, newPost)
}