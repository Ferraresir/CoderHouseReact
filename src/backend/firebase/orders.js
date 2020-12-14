import { getFirestore } from "./index";


export const getOrders =(email)=>{
    return new Promise ((resolve,reject) =>{
        getFirestore().collection('orders').where('email','==',`${email}`).get()
        .then((orders)=>{
            if(orders.lenght===0 ) reject('No se encontraron pedidos a su nombre')
            console.log(orders.docs.map((doc)=> console.log(doc.data())));
            
        })
    })
}

export const saveOrder = (order)=>{
  return new Promise((resolve, reject)=>{
    getFirestore().collection('orders').add(order)
        .then(({id}) => {
            if(!id) reject('No se pudo guardar la orden')
            resolve(id)
        })
    })
}

