import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

export default function CardItem(props) {
  return (
    <>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={props.berita.thumb}
                />
                <CardContent sx={{height:'auto'}}>
                  <Typography gutterBottom component="div">
                  {props.berita.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {props.berita.desc.substring(0, 190)}...
                  </Typography>
                </CardContent>
                <CardActions sx={{textAlign:'center', alignContent:'center'}}>
                  <Button size="small" variant="outlined">                <Link
                  style={{ textDecoration: "none" }}
                  to={`/detail/${props.berita.key}`}
                >Selengkapnya</Link></Button>
                </CardActions>
              </Card>

    </>
  );
}
