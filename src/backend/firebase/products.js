import { getFirestore } from "./index";


export const getCategories=()=>{
  return new Promise((resolve, reject)=>{
    getFirestore().collection('categories').get()
    .then((query)=>{
      if(query === 0) reject('No se pudieron consultar las categorias')
      let aux = query.docs.map((doc)=>({...doc.data()}))
      resolve(aux)
    })
  })
}

export const getProducts = (cat) => {
  return new Promise((resolve, reject) => {
    let products = getFirestore().collection("productos").limit(12);
    if (cat) products = products.where("category_id", "==", `${cat}`);
    products.get().then((query) => {
      if (query.size === 0) reject("no hay registros");

      const data = query.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      resolve(data);
    });
  });
};

export const getData = (id) => {
  return new Promise((resolve, reject) => {
    getFirestore().collection("productos").doc(id).get()
    .then((query) => {
      if (query.size === 0) reject("No se encontro el producto");
      resolve(query.data());
    });
  });
};
