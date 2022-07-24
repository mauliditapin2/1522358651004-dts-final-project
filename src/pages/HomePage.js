import React from "react";
import NavBar from "../containers/NavBar";
import CarouselNews from "../containers/CarouselNews";

import { Box, Paper } from "@mui/material";
import SliderTab from "../components/SliderTab";
import Footer from "../components/Footer";
export default function HomePage() {
  return (
    <div>
      <NavBar />
      <CarouselNews />
      <br/><br/>
      <Paper elevation={3}>
        <Box>
          <SliderTab />
        </Box>
      </Paper>
      <Footer />
    </div>
  );
}
