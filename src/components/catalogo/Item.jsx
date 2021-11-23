import * as React from "react";
import ItemCount from "./ItemCount";

const Item = (titulo, precio, descripcion, imagen, cantidad) => {
  return (
    <>
      <h3>{titulo}</h3>
      <img src={imagen} alt="" />
      <h4>{precio}</h4>
      <p>{descripcion}</p>
      <ItemCount stock={cantidad} initial={1} />
    </>
  );
};

export default Item;
