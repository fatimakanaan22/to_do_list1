import React from "react";
import SideBar from "./sideBar";
import "./products.css";
import { Grid, TextField } from "@mui/material";

const Products = () => {
  return (
    <div className="sidal">
      <div className="product-page">
        <Grid container spacing={2} item xs={12} lx={10} lg={10} md={10}>
          <Grid>
            <TextField className="search" label="search" fullwidth="true" />
          </Grid>
          <Grid item xs={2}>
            <button className="filter" xs={{ top: "-50px" }} ></button>
          </Grid>
        </Grid>
      </div>
    </div >
  );
};

export default Products;
