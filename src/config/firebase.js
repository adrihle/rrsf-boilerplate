import firebase from 'firebase/app'
import ReduxSagaFirebase from 'redux-saga-firebase'
import 'firebase/firestore'

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA-ByqAqFtmlvH7WkpDGXXlYtCgSrO9ulw",
  authDomain: "sample-2-f2cea.firebaseapp.com",
  databaseURL: "https://sample-2-f2cea.firebaseio.com",
  projectId: "sample-2-f2cea",
  storageBucket: "sample-2-f2cea.appspot.com",
  messagingSenderId: "965067250190",
  appId: "1:965067250190:web:d06e76cf245bf6d669ba5f"
})

const rsf = new ReduxSagaFirebase(firebaseApp)

export { firebaseApp }

export default rsf