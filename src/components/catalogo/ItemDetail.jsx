import * as React from "react";
import ItemCount from "./ItemCount";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Grid from "@mui/material/Grid";

const ItemDetail = ({ item }) => {
  const { titulo, precio, descripcion, cantidad, imagen, presentacion } = item;

  return (
    <Grid container spacing={1} direction="row">
      {/* titulo+precio+descripcion+presentacion+itemcount */}
      <Grid xs={6} item>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <h3>{titulo}</h3>
            <p className="negrita">{presentacion}</p>
            <p>{descripcion}</p>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={0}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Grid container direction="column">
                <Grid item xs={2}>
                  <Chip
                    className="precioChipDetail"
                    label={precio}
                    color="error"
                    icon={<MonetizationOnIcon className="iconoDetail" />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <ItemCount stock={cantidad} initial={1} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* imagen */}
      <Grid item xs={6}>
        <img src={imagen} alt={titulo}></img>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
