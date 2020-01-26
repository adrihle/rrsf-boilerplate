import { takeLatest, put, call, fork, take } from 'redux-saga/effects'
import { push } from 'connected-react-router'

//firebase dependencies
import { auth } from 'firebase'
import rsf from '../../config/firebase'

//importing actions
import { loginFailure, loginSuccess } from '../actions/login'
import { syncUser } from '../actions/sync'
import { logoutFailure, logoutSuccess } from '../actions/logout'

//importing constants
import { types, routes } from '../../constants'

//instance of a facebook auth provider
const authProvider = new auth.FacebookAuthProvider()

function* loginSaga(){
    try {
        
        const data = yield call(rsf.auth.signInWithPopup, authProvider)
        yield put(loginSuccess(data))
        // yield put(push('some-route'))
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
            yield put(push(routes.APP.TODO))
        }else {
            yield put(syncUser(null))
        }
    }
}

export default function* (){
    yield fork(syncUserSaga)
    yield takeLatest(types.LOGIN.REQUEST, loginSaga)
    yield takeLatest(types.LOGOUT.REQUEST, logoutSaga)
}