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
  Link,
  Paper,
  Typography,
} from "@mui/material";
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
      <>
        <NavBar />
        <div className="wrapper">
          <div className="search-wrapper">
            <label htmlFor="search-form">
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search for..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <span className="sr-only">Search countries here</span>
            </label>
            <div className="select">
              <select
                onChange={(e) => {
                  setFilterParam(e.target.value);
                }}
                className="custom-select"
                aria-label="Filter Countries By Countries"
              >
                <option value="All">Filter By Region</option>
                <option value="Kiki Rimadina">Kiki Rimadina</option>
                <option value="Jordy Leonardo">Jordy Leonardo</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
              <span className="focus"></span>
            </div>
          </div>
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
        </div>
        <Footer />
      </>
    );
  }
}
