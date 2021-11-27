import Card from "@mui/material/Card";
import * as React from "react";
import ItemCount from "./ItemCount";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Item = ({ titulo, precio, descripcion, imagen, cantidad }) => {
  return (
    <>
      <Card className="carta" sx={{ height: 650 }}>
        <h3>{titulo}</h3>
        <CardMedia component="img" image={imagen} alt={titulo} />
        <Chip
          className="precioChip"
          label={precio}
          color="error"
          icon={<MonetizationOnIcon />}
        />
        <p>{descripcion}</p>
        <ItemCount stock={cantidad} initial={1} />
      </Card>
    </>
  );
};

export default Item;
