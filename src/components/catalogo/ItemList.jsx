import * as React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  console.log("Productos en ItemList: ", productos);

  <div>
    {productos.map((producto) => {
      return (
        <Item
          key={productos.id}
          titulo={producto.titulo}
          imagen={producto.imagen}
          precio={producto.precio}
          categoria={producto.categoria}
          descripcion={producto.descripcion}
        />
      );
    })}
  </div>;
};

export default ItemList;
