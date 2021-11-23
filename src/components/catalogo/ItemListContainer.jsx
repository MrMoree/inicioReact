import * as React from "react";
import ItemList from "./ItemList";
import ObtenerProducto from "../servicios/PromesaManual";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    ObtenerProducto.then((res) => {
      setProductos(res);
    }).catch((err) => alert("Algo salió mal: ", err));
  }, []);

  return (
    <>
      <h2>Soy el ItemListContainer</h2>
      <h3>{greeting}</h3>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
