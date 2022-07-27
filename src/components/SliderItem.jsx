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

import { Link } from "react-router-dom";
import CardItem from "./CardItem";

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
          `/api/${type}`
        );
        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setBerita(responseDariNews.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataBerita();
  }, );
  return (
    <>
      <Swiper
      breakpoints={{

        0: {
          slidesPerView: 2,
        },
        
        600: {
          slidesPerView: 5,
        },

        }}

        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        autoplay
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        
        {berita?.slice(-5)?.map((berita) => {
          return (
            <SwiperSlide key={berita.key}>
              <CardItem berita={berita}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
