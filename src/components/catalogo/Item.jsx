import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Link } from "react-router-dom";

const Item = ({ id, titulo, precio, descripcion, imagen, presentacion }) => {
  return (
    <>
      <Card className="carta">
        <Link to={`/item/${id}`}>
          <h3>{titulo}</h3>
          <CardMedia component="img" image={imagen} alt={titulo} />
        </Link>
        <Chip
          className="precioChip"
          label={precio}
          color="error"
          icon={<MonetizationOnIcon />}
        />
        <p className="negrita">{presentacion}</p>
      </Card>
    </>
  );
};

export default Item;
