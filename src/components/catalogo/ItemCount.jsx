import * as React from "react";
import { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ItemCount = ({ stock, initial }) => {
  //console.log("soy stock de ItemCount: ", stock);
  //console.log("soy valor inicial de ItemCount: ", initial);

  const [count, setCount] = useState(initial);

  const addItem = () => {
    const valor = count + 1;
    if (valor <= stock) {
      setCount(valor);
    }
  };

  const quitItem = () => {
    const valor = count - 1;
    if (valor >= initial) {
      setCount(valor);
    }
  };

  const onAdd = () => {
    const mensaje = `Agregaste ${count} alfajor`;
    count === 1 ? alert(mensaje) : alert(`${mensaje}es`);
  };

  return (
    <>
      <div className="divCounter">
        <button className="botonCounter" onClick={quitItem}>
          <RemoveCircleIcon />
        </button>
        <h3 className="botonCounter">{count}</h3>
        <button className="botonCounter" onClick={addItem}>
          <AddCircleIcon />
        </button>
      </div>

      <button onClick={onAdd}>Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
