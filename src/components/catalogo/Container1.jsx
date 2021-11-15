import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ItemCount from "./ItemCount";

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={4}>
          <h3>Dulce de leche</h3>
          <img
            src="https://static.wixstatic.com/media/29f523_31c4b301eef44450a2bb552944c3cc65~mv2.png/v1/fill/w_261,h_189,al_c,q_85,usm_0.66_1.00_0.01/29f523_31c4b301eef44450a2bb552944c3cc65~mv2.webp"
            alt=""
          />
          <ItemCount stock={3} initial={1} />
        </Grid>

        <Grid item xs={4}>
          <h3>Dulce de leche - Cobertura Blanca</h3>
          <img
            src="https://static.wixstatic.com/media/29f523_6d76f0e9fee949029ebd0248d046f611~mv2.png/v1/fill/w_261,h_189,al_c,q_85,usm_0.66_1.00_0.01/29f523_6d76f0e9fee949029ebd0248d046f611~mv2.webp"
            alt=""
          />
          <ItemCount stock={4} initial={1} />
        </Grid>

        <Grid item xs={4}>
          <h3>Membrillo</h3>
          <img
            src="https://static.wixstatic.com/media/29f523_e6bd31bae4c44079ac3afd82ce392a9f~mv2.png/v1/fill/w_261,h_188,al_c,q_85,usm_0.66_1.00_0.01/29f523_e6bd31bae4c44079ac3afd82ce392a9f~mv2.webp"
            alt=""
          />
          <ItemCount stock={5} initial={1} />
        </Grid>
      </Grid>
    </Box>
  );
}
