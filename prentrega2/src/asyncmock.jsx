const misProducts = [
    { id: 1, nombre:'Remera Negra', precio: 10000, img: null, idCat:'2' },
    { id: 1, nombre:'Remera Blanca', precio: 10000, img: null, idCat:'2'},
    { id: 1, nombre:'Buzo Negro', precio: 15700, img: './buzo-negro.png', idCat:'3' },
    { id: 1, nombre:'Buzo Blanco', precio: 15700, img: './buzo-blanco.png', idCat:'3'},
    { id: 1, nombre:'Cargo Beige', precio: 18700, img: null, idCat:'4'}

]

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProducts);
        }, 2000)
    })

}


export const getUnProduct = (id) => {
    return new Promise (resolve => {
        setTimeout (() => {
            const product = misProducts.find(prod=>prod.id === id);
            resolve(product);
        }, 2000)
    })
}


export const getProductEnCatergories = (idCategory) => {
    return new Promise (resolve =>{
        setTimeout(() =>{
            const ProductCategories = misProducts.filter(prod => prod.idCat ===idCategory);
            resolve(ProductCategories);
        }, 2000)
    })
}