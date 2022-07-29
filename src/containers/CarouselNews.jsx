import Carousel from "react-material-ui-carousel";
import {
  Paper,
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
            <Card sx={{ display: "flex", flexDirection: "row", width: '100%' }}>
              <Box
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  height: "20em",
                  width: '50%'
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    
                    objectFit: "cover",
                    objectPosition: " center",
                    height: "25em",
                  }}
                  image={berita.thumb}
                  alt={berita.title}
                />
              </Box>

              <Box
                sx={{
                  paddingTop: "5em",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  height: "20em",
                  width: '50%'
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography variant="h5" sx={{ marginBottom: "1em" }}>
                    {berita.title}
                  </Typography>
                  <Typography>{berita.desc.substring(0, 130)}...</Typography>
                  <Typography>{berita.time}</Typography>
                </CardContent>
              </Box>
            </Card>
          </Paper>
        );
      })}
    </Carousel>
  );
}
