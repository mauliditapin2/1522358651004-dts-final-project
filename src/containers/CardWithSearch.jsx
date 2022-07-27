import React, { useState, useEffect } from "react";
import NavBar from "../containers/NavBar";
import Footer from "../components/Footer";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FilledInput,
  FormControl,
  InputAdornment,
  Paper,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";

import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

export default function CardWithSearch() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["author", "title"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://the-lazy-media-api.vercel.app/api/games")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  function search(items) {
    return items.filter((item) => {
      /* 
//             in here we check if our region is equal to our c state
// if it's equal to then only return the items that match
// if not return All the countries
        */
      if (item.title == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        style={{
          backgroundImage: `url("https://wallpapercave.com/wp/wp9378601.jpg")`,
        }}
      >
        <NavBar />
        <div style={{ paddingTop: "5em" }}>
          <Paper sx={{ padding: "1em" }}>
            <Box sx={{ margin: "1em" }}>
              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <TextField
                  id="outlined-basic"
                  label="Cari Judul Berita"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"><SearchIcon/></InputAdornment>
                    ),
                  }}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </FormControl>
            </Box>

            <Paper
              elevation={3}
              sx={{ display: "flex", flexWrap: "wrap", margin: "1em" }}
            >
              {search(items).map((item, index) => (
                <>
                  <Box sx={{ margin: "auto" }}>
                    <Card key={index} sx={{ maxWidth: 345, margin: "1em" }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={item.thumb}
                      />
                      <CardContent sx={{ height: "auto" }}>
                        <Typography gutterBottom component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.desc.substring(0, 190)}...
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{ textAlign: "center", alignContent: "center" }}
                      >
                        <Button size="small" variant="outlined">
                          {" "}
                          <Link
                            style={{ textDecoration: "none" }}
                            to={`/detail/${item.key}`}
                          >
                            Selengkapnya
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </>
              ))}
            </Paper>
          </Paper>
        </div>
        <Footer />
      </div>
    );
  }
}
