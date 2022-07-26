import React from "react";
import NavBar from "../containers/NavBar";
import CarouselNews from "../containers/CarouselNews";

import { Box, Paper } from "@mui/material";
import SliderTab from "../components/SliderTab";
import Footer from "../components/Footer";
import CardContent from "../containers/CardContent";
import CardWithFilter from "../containers/CardWithFilter"
export default function HomePage() {
  return (
    <>
      <Paper sx={{backgroundColor:"black"}}>
        <NavBar />
        <CarouselNews />
        <br />
        <br />
        <Paper elevation={3} sx={{margin:"1em"}}>
          <Box>
            <SliderTab />
          </Box>
        </Paper>
        <Paper elevation={3} sx={{margin:"1em"}}>
          <CardWithFilter/>
        </Paper>
        <Footer />
      </Paper>
    </>
  );
}
