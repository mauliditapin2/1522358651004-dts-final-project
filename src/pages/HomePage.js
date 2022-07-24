import React from "react";
import NavBar from "../containers/NavBar";
import CarouselNews from "../containers/CarouselNews";

import { Box } from "@mui/material";
import SliderTab from "../components/SliderTab";
import Footer from "../components/Footer";
export default function HomePage() {
  return (
    <div>
      <NavBar />
      <CarouselNews />
      <Box>
        <SliderTab />
      </Box>

      <Footer/>
    </div>
  );
}
