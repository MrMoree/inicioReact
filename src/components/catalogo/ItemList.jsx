import * as React from "react";
import Item from "./Item";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ItemList = ({ productos }) => {
  console.log("Productos en ItemList: ", productos);

  return (
    <div>
      <Box className="cajas" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          {productos.map((producto) => {
            return (
              <Grid item xs={4}>
                <Item
                  key={productos.id}
                  titulo={producto.titulo}
                  imagen={producto.imagen}
                  precio={producto.precio}
                  categoria={producto.categoria}
                  cantidad={producto.cantidad}
                  descripcion={producto.descripcion}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default ItemList;
