import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "10em",
        padding: "1em 0em 0em 0em",
      }}
    >
      <Divider />
      <br/>
      <br/>
      <Typography variant="h6">
        &copy; 2022 Maulidi Rahman - 152235865100-4
      </Typography>
      <Box>
        <IconButton size="large">
          Facebook
          <Facebook />
        </IconButton>
        <IconButton size="large">
          Twitter
          <Twitter />
        </IconButton>
        <IconButton size="large">
          Instagram
          <Instagram />
        </IconButton>
      </Box>
    </div>
  );
}
