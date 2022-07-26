import {
  Box,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

export default function CardDetail(props) {
  return (
    <div>
      <Paper sx={{ backgroundColor: "black", height: "auto" }}>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            objectFit: "cover",
            objectPosition: " center",
            height: "25em",
          }}
          image={props.berita?.content?.[0]}
          alt={props.berita.title}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "90%",
            borderTopRightRadius: "15em",
          }}
        >
          <Paper elevation={3} sx={{ margin: "1em" }}>
            <CardContent sx={{ textAlign: "left", padding: "1em 5em 0em 5em" }}>
              <Typography variant="h4">{props.berita.title}</Typography>
              <Typography variant="body1">{props.berita.date}</Typography>
              <Typography variant="body1">
                Penulis : {props.berita.author}
              </Typography>
              <br />
              <br />
              <Typography variant="subtitle2">
                {props.berita?.content?.[2]}
              </Typography>
              <iframe
                width="560"
                height="315"
                src={props.berita?.content?.[4]}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <Typography variant="subtitle2">
                {props.berita?.content?.[4]}
              </Typography>
              <Typography variant="subtitle2">
                {props.berita?.content?.[5]}
              </Typography>
              <Typography variant="subtitle2">
                {props.berita?.content?.[6]}
              </Typography>
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: " center",
                  height: "25em",
                }}
                image={props.berita?.content?.[9]}
                alt={props.berita.title}
              />
              <Typography variant="subtitle2">
                {props.berita?.content?.[8]}
              </Typography>
              <Typography variant="subtitle2">
                {props.berita?.content?.[9]}
              </Typography>
            </CardContent>
          </Paper>
        </Box>
        
      </Paper>
    </div>
  );
}
