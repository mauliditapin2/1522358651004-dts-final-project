import * as React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { keluarDariApps } from "../firebase/firebase";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { LoginOutlined, LogoutOutlined, Newspaper } from "@mui/icons-material";

export default function NavBar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const buttonLogoutOnClickHandler = async () => {
    // Kita akan memanggil fungsi keluarDariApps di sini
    await keluarDariApps();
    navigate("/");
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="absolute" sx={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Newspaper sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Link to="/">
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              News On Fire
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/">
                <Typography
                  sx={{
                    textDecorationColor: "none",
                    color: "black",
                    textDecorationLine: "none",
                    fontFamily: "monospace",
                  }}
                >
                  Beranda
                </Typography>
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/search">
                <Typography
                  sx={{
                    textDecorationColor: "none",
                    color: "black",
                    textDecorationLine: "none",
                    fontFamily: "monospace",
                  }}
                >
                  Cari Berita
                </Typography>
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            {user != null ? (
              <Typography
                variant="h8"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  textTransform: "uppercase",
                  marginTop: "12px",
                  textDecorationColor: "none",
                  color: "white",
                  textDecorationLine: "none",
                  fontFamily: "monospace",
                }}
              >
                <Button onClick={buttonLogoutOnClickHandler}>
                  {user.email}
                  <LogoutOutlined />
                </Button>
              </Typography>
            ) : (
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Tooltip title="Open settings">
                  <LoginOutlined onClick={handleOpenUserMenu} sx={{ p: 0 }} />
                </Tooltip>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
