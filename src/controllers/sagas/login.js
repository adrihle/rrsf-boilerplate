import { takeLatest, put, call, fork, take } from 'redux-saga/effects'
import { push } from 'connected-react-router'

//firebase dependencies
import { auth } from 'firebase'
import rsf from '../../config/firebase'

//importing actions
import { loginFailure, loginSuccess, fbLoginFailure, fbLoginSuccess, logoutFailure, logoutSuccess } from '../actions/login'
import { syncUser } from '../actions/sync'

//importing constants
import { types, routes } from '../../constants'

//instance of a facebook auth provider
const authProvider = new auth.FacebookAuthProvider()

function* fbLoginSaga(){
    try {
        const data = yield call(rsf.auth.signInWithPopup, authProvider)
        yield put(fbLoginSuccess(data))
        yield put(push(routes.APP.LANDING))
    } catch (err) {
        yield put(fbLoginFailure(err))
    }
}

function* loginSaga(login){
    try {
        const data = yield call(rsf.auth.signInWithEmailAndPassword, login.user.email, login.user.password)
        yield put(loginSuccess(data))
        yield put(push(routes.APP.LANDING))
    } catch (err) {
        yield put(loginFailure(err))
    }
}

function* logoutSaga(){
    try {
        const data = yield call(rsf.auth.signOut)
        yield put(logoutSuccess(data))
        yield put(push(routes.APP.LANDING))
    } catch (err) {
        yield put(logoutFailure(err))
    }
}

//function witch create listening for once user is auth get the user info to the store
//and remember from cache the auth instace to refresh date and auth automatically
function* syncUserSaga(){
    const channel = yield call(rsf.auth.channel)

    while (true){
        const { user } = yield take(channel)

        if (user){
            yield put(syncUser(user))
        }else {
            yield put(syncUser(null))
        }
    }
}

export default function* (){
    yield fork(syncUserSaga)
    yield takeLatest(types.LOGIN.REQUEST, loginSaga)
    yield takeLatest(types.FB_LOGIN.REQUEST, fbLoginSaga)
    yield takeLatest(types.LOGOUT.REQUEST, logoutSaga)
}