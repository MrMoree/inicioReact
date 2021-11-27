import * as React from "react";
import { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";

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
        <Button
          className="botonCounter"
          onClick={quitItem}
          startIcon={<RemoveCircleIcon />}
        />

        <h3 className="itemCount">{count}</h3>

        <Button
          className="botonCounter"
          onClick={addItem}
          startIcon={<AddCircleIcon />}
        />
      </div>

      <Button
        onClick={onAdd}
        variant="outlined"
        startIcon={<AddShoppingCartIcon />}
      >
        Agregar al Carrito
      </Button>
    </>
  );
};

export default ItemCount;
