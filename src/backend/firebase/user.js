import { getAuth } from './index'

//Sin implementar. login de usuario para complat y consultar pedidos

export const singup = (email,password)=>{
    return new Promise((resolve,reject)=>{
        getAuth().createUserWithEmailAndPassword(email, password)
        .then((response)=>{
            resolve(response)
        })
        .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/email-already-in-use') {
        alert('El mail que intenta utilizar ya esta en uso');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
    })
}

export const singin = (email,password)=>{
    return new Promise((resolve,reject)=>{
        getAuth().signInWithEmailAndPassword(email, password)
        .then((response)=>{
            resolve (response)
        })
        .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña Incorrecta');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
    })
}

export const singout = ()=>{   
        getAuth().signOut()
}