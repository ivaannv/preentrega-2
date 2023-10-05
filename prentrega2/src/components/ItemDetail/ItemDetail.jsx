import React from 'react'
import "./ItemDetail.css"
import { Link } from 'react-router-dom';
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from 'react';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, cantidad, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="item-name">Nombre: {nombre}</h2>
        <h3 className="item-price">Precio: ${precio}</h3>
        <h3 className="item-id">ID: {id}</h3>
        <p className="item-description">SE UN FLAITE</p>
        <img className="item-image" src={img} alt={nombre} />
        {agregarCantidad > 0 ? (
          <Link className="finish-btn" to="/cart">
            Terminar compra
          </Link>
        ) : (
          <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;