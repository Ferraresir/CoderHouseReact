import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'

const app = firebase.initializeApp(
   
)

export const getFirebase = () => {
    return app
}
//Para llamar a la base de datos
export const getFirestore = () => {
    return firebase.firestore()
}

export const getAuth = ()=>{
    return app.auth()
}
