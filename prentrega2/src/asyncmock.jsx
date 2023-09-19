const misProducts = [
    { id: 1, nombre: 'Remera Negra', precio: 10000, img: "./remera-negra.png", idCat: '2' },
    { id: 2, nombre: 'Remera Blanca', precio: 10000, img: "./remera-blanca.png", idCat: '2' },
    { id: 3, nombre: 'Buzo Negro', precio: 15700, img: './buzo-negro.png', idCat: '3' },
    { id: 4, nombre: 'Buzo Blanco', precio: 15700, img: './buzo-blanco.png', idCat: '3' },
    { id: 5, nombre: 'Cargo Beige', precio: 18700, img: "./cargo-beige.png", idCat: '4' }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProducts);
        }, 100)
    })
}


 

export const getUnProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProducts.find(prod => prod.id == id);
            resolve(producto);
        }, 100)
    })
}




export const getProductsEnCategories = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProducts.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}