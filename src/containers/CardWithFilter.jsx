import React, { Component } from "react";
import { render } from "react-dom";
import news from "../apis/news";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
const urlAPI = "https://the-lazy-media-api.vercel.app/api/games";
export default class CardWithFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrypost: [],
      filterberita: [],
    };
  }
  componentDidMount() {
    // this.GetDataAPi()
    this.GetDataByAxios();
  }
  GetDataByAxios() {
    axios.get(urlAPI).then((res) => {
      this.setState({
        arrypost: res.data,
      });
      console.log(res.data);
    });
  }

  GetDataAPi() {
    fetch(urlAPI)
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((resdata) => {
        console.log(resdata);
        this.setState({
          arrypost: resdata,
        });
      });
  }
  handleClick = (event) => {
    const byOrigin = event.target.value;
    let filterberita;
    if (event.target.value === "all") {
      filterberita = this.state.arrypost;
    } else {
      filterberita = this.state.arrypost.filter(
        (berita) => berita.author === event.target.value
      );
    }

    this.setState({ filterberita: filterberita });
  };

  render() {
    const renderA = this.state.arrypost;
    const renderAll = this.state.filterberita.map((berita) => (
      <Box sx={{ padding: "1em", margin: "auto" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={berita.thumb}
          />
          <CardContent sx={{ height: "auto" }}>
            <Typography gutterBottom component="div">
              {berita.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {berita.desc.substring(0, 190)}...
            </Typography>
          </CardContent>
          <CardActions sx={{ textAlign: "center", alignContent: "center" }}>
            <Button size="small" variant="outlined">
              {" "}
              <Link
                style={{ textDecoration: "none" }}
                to={`/detail/${berita.key}`}
              >
                Selengkapnya
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Box>
    ));
    const Btn = [...new Set(this.state.arrypost.map((item) => item.author))];
    const ButtonCek = Btn.map((berita, index) => (
      <Button
        key={index}
        sx={{ margin: "1em" }}
        variant="outlined"
        value={berita}
        onClick={this.handleClick}
      >
        {berita}
      </Button>
    ));
    return (
      <div>
        <Paper elevation={3} sx={{ margin: "2em", padding: "1em" }}>
          <Typography variant="h6">FILTER BERITA</Typography>
          <Button
            sx={{ margin: "1em" }}
            variant="outlined"
            value="all"
            onClick={this.handleClick}
          >
            All
          </Button>
          {ButtonCek}
        </Paper>

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>{renderAll}</Box>
        <CardContent />
      </div>
    );
  }
}
