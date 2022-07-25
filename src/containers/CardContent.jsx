import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import news from "../apis/news";
import CardItem from "../components/CardItem";
export default function CardContent() {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/original";
  const [berita, setBerita] = useState([]);
  useEffect(() => {
    const fetchDataBerita = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariNews = await news.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          // `${"/top-headlines?country=id&category=" + type}`
          `${"/movie/popular"}`
        );
        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setBerita(responseDariNews.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataBerita();
  });
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {berita.map((berita) => {
          return (
            <Box sx={{padding:'1em', margin:'auto'}}>
              <CardItem berita={berita} />
            </Box>
          );
        })}
      </Box>
    </div>
  );
}
