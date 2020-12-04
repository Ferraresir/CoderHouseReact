import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyCIjYUieu4wNxnFJt8nJ3zSF6e8HxChVCM",
        authDomain: "codermarket-5e610.firebaseapp.com",
        projectId: "codermarket-5e610",
        storageBucket: "codermarket-5e610.appspot.com",
        messagingSenderId: "1027980225061",
        appId: "1:1027980225061:web:68f42b30d00b1ca1dfadcc"
    }
)

export const getFirebase = () => {
    return app
}
//Para llamar a la base de datos
export const getFirestore = () => {
    return firebase.firestore()
}