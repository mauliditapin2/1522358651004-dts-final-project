import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Card, Box, CardContent, CardMedia } from "@mui/material";
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
          "/movie/popular"
        );
        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setBerita(responseDariNews.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataBerita();
  }, []);

  return (
    <Carousel>
      {berita.map((berita) => {
        return (
          <Paper>
            <Card sx={{ display: "flex" }}>
              
              <CardMedia
                component="img"
                sx={{ width: '100%',marginRight:'-100%' , objectFit:'cover', objectPosition:' center', height:'25em'}}
                image={`${baseUrlForMovie}${berita.backdrop_path}`}
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column", maxWidth:'50%', paddingTop:'10em',backgroundColor: 'rgba(0, 0, 0, 0.8)', color:'white', borderTopRightRadius:'15em'  }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  
                  <Typography variant="h5" sx={{marginBottom: '1em'}}>{berita.title}</Typography>
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
