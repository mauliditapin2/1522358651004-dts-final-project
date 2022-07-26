import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  Typography,
  Card,
  Box,
  CardContent,
  CardMedia,
} from "@mui/material";
import news from "../apis/news";
import { useEffect, useState } from "react";

export default function CarouselNews() {
  const [berita, setBerita] = useState([]);
  const baseUrlForMovie = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const fetchDataBerita = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariNews = await news.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          "/api/games"
        );
        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setBerita(responseDariNews.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataBerita();
  }, []);

  return (
    <Carousel>
      {berita.slice(-5).map((berita) => {
        return (
          <Paper>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  marginRight: "-100%",
                  objectFit: "cover",
                  objectPosition: " center",
                  height: "25em",
                }}
                image={berita.thumb}
                alt={berita.title}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "50%",
                  paddingTop: "5em",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  height:'20em'
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography variant="h5" sx={{ marginBottom: "1em" }}>
                    {berita.title}
                  </Typography>
                  <Typography>
                    {berita.desc.substring(0, 250)}...
                  </Typography>
                  <Button variant="outlined">Selengkapnya</Button>
                </CardContent>
              </Box>
            </Card>
          </Paper>
        );
      })}
    </Carousel>
  );
}
