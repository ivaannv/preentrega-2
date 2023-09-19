import { useState, useEffect } from "react";
import React from "react";
import { getProducts, getProductsEnCategories } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [product, setproduct] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getProductsEnCategories : getProducts;

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