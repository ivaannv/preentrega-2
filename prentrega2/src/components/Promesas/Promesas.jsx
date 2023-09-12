import React from 'react'

const Promesas = () => {
    console.log("remera 1");
    console.log("remera 2");

    setTimeout(() => {
        console.log("remera 1");
    }, 2000)

    setTimeout(() => {
        console.log("remera 2");
    }, 3000)


    const remera1 = () => {
        return new Promise((resolve, reject) => {
            if (estado) {
                resolve("remera recibida con exito");
            } else {
                reject("remera no recibida con exito");
            }
        })
    }
    console.log(remera1(true)); 

    remera1(true)
        .then(respuesta => console.log("La remera es todo un exito!!", respuesta))
        .catch(error => console.log("No salio como esperaba", error))



    const array = ["remera1", "remera2", "buzo1"]
    const solicitarProductos = () =>{
        return new Promise((resolve, reject) => {
            if(estado){
                resolve(array)
            } else{
                reject("no se encutra ese producto!")
            }
        })
    }
    solicitarProductos(true)
    .then(respuesta =>{
        console.table(respuesta);
    })



    return (
        <div>Promesas</div>
    )
}


export default Promesas