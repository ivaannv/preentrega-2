import { useState, useEffect } from "react";
import React from "react";
import { getProduct, getProductEnCatergories } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [product, setproduct] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getProductEnCatergories : getProduct;

    funcion(idCategoria)
      .then(res => setproduct(res))

  }, [idCategoria])

  return (
    <>
      <h2> {props.greeting} </h2>
      <ItemList products={product} />
    </>
  )
}

export default ItemListContainer