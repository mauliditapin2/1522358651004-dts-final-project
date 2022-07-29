import React from "react";
import NavBar from "../containers/NavBar";
import CarouselNews from "../containers/CarouselNews";

import { Box, Paper } from "@mui/material";
import SliderTab from "../components/SliderTab";
import Footer from "../components/Footer";
//import CardContent from "../containers/CardContent";
import CardWithFilter from "../containers/CardWithFilter";
export default function HomePage() {
  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url("https://wallpapercave.com/wp/wp9378601.jpg")`,
          objectPosition: " center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <NavBar />
        <CarouselNews />
        <Paper elevation={3} sx={{ margin: "1em",backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
          <Box>
            <SliderTab />
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ margin: "1em",backgroundColor: "rgba(255, 255, 255, 0.7)", padding:'1em' }}>
          <CardWithFilter />
        </Paper>
        <Footer />
      </Paper>
    </>
  );
}
