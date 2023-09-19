import React from 'react'
import './ItemDetail.css'



const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <>
        <img src={img} alt={nombre} />
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime numquam dolore natus ipsa molestiae facere assumenda. Voluptas omnis magni saepe, consequatur atque dolorem eius ipsum est quis porro neque quibusdam!</p>
        
    </>
  )
}

export default ItemDetail