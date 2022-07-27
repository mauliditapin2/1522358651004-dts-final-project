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
  const listItems = props.berita.content;
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
          image={props.berita?.content?.[0] != "" ? props.berita?.content?.[0] : props.berita.thumb}
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
                {listItems}
              </Typography>
              
            </CardContent>
          </Paper>
        </Box>
        
      </Paper>
    </div>
  );
}
