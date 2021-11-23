import * as React from "react";
import ItemList from "./ItemList";
import ObtenerProducto from "../servicios/PromesaManual";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    ObtenerProducto.then((res) => {
      setProductos(res);
    }).catch((err) => alert("Algo salió mal: ", err));
  }, []);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
