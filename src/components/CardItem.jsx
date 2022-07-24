import React from "react";

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

export default function CardItem(props) {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/original";
  return (
    <>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={`${baseUrlForMovie}${props.berita.poster_path}`}
                />
                <CardContent sx={{height:'7em'}}>
                  <Typography gutterBottom component="div">
                  {props.berita.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {props.berita.overview.substring(0, 190)}...
                  </Typography>
                </CardContent>
                <CardActions sx={{textAlign:'center', alignContent:'center'}}>
                  <Button size="small" variant="outlined">                <Link
                  style={{ textDecoration: "none" }}
                  to={`/detail/${props.berita.id}`}
                >Selengkapnya</Link></Button>
                </CardActions>
              </Card>

    </>
  );
}
