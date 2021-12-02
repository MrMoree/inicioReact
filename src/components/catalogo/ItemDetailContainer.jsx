import * as React from "react";
import { useState, useEffect } from "react";
import ObtenerProducto from "../servicios/PromesaManual";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  console.log("item", item);
  console.log(useParams);
  const { id } = useParams();
  console.log("ID userParams", id);

  useEffect(() => {
    ObtenerProducto.then((res) => {
      setItem(res.find((producto) => producto.id === id));
    });
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
