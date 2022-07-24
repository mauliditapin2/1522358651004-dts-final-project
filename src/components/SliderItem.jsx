import React, {  useState, useEffect } from "react";
import news from "../apis/news";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SliderItem({ type }) {
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
  }, );
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        autoplay
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {berita.map((berita) => {
          return (
            <SwiperSlide key={berita.index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={`${baseUrlForMovie}${berita.poster_path}`}
                />
                <CardContent sx={{height:'10em'}}>
                  <Typography gutterBottom component="div">
                  {berita.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {berita.overview}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Selengkapnya</Button>
                </CardActions>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
