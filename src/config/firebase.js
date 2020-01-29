import { initializeApp } from 'firebase/app'
import ReduxSagaFirebase from 'redux-saga-firebase'
import 'firebase/firestore'
import info from './firebaseinfo'

var firebaseApp = initializeApp(info)

const rsf = new ReduxSagaFirebase(firebaseApp)

export { firebaseApp }

export default rsf