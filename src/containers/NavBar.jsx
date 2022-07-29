import * as React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { keluarDariApps } from "../firebase/firebase";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { Home, LoginOutlined, Newspaper } from "@mui/icons-material";

const pages = ["Products", "Pricing", "Blog"];

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
    <AppBar
      position="absolute"
      sx={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecorationColor: " none",
              textDecorationLine: "none",
            }}
          >
            News On Fire
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/"
                  sx={{
                    textDecorationColor: " none",
                    textDecorationLine: "none",
                  }}
                >
                  <Typography
                    sx={{
                      textDecorationColor: "none",
                      color: "black",
                      textDecorationLine: "none",
                      fontFamily: "monospace",
                    }}
                  >
                    Home
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/search"
                  sx={{
                    textDecorationColor: " none",
                    textDecorationLine: "none",
                  }}
                >
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
              </MenuItem>
            </Menu>
          </Box>
          <Link to="/">
            <Home sx={{ display: { xs: "none", md: "none" }, mr: 1 }} />
            <Typography
              variant="body1"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "none", md: "none" },
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
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textDecorationColor: " none",
                textDecorationLine: "none",
              }}
            >
              <Link
                to="/"
                sx={{
                  textDecorationColor: " none",
                  textDecorationLine: "none",
                }}
              >
                <Typography
                  sx={{
                    textDecorationColor: "none",
                    color: "black",
                    textDecorationLine: "none",
                    fontFamily: "monospace",
                  }}
                >
                  Home
                </Typography>
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textDecorationColor: " none",
                textDecorationLine: "none",
              }}
            >
              <Link
                to="/search"
                sx={{
                  textDecorationColor: " none",
                  textDecorationLine: "none",
                }}
              >
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

          <Box sx={{ flexGrow: 0 }}>
            {user != null ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ marginRight: "1em" }}>
                  {user.email}
                </Typography>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://temank3.id/public/images/default.jpg"
                    />
                  </IconButton>
                </Tooltip>{" "}
              </div>
            ) : (
              <Link
                to="/Login"
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                }}
              >
                <Typography>Login</Typography>
                <Tooltip title="Open settings">
                  <LoginOutlined onClick={handleOpenUserMenu} sx={{ p: 0 }} />
                </Tooltip>
              </Link>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                {user != null ? (
                  <Typography
                    variant="body1"
                    sx={{
                      display: { xs: "flex", sm: "block" },
                      textTransform: "uppercase",
                      textDecorationColor: "none",
                      color: "white",
                      textDecorationLine: "none",
                      fontFamily: "monospace",
                    }}
                  >
                    <Button onClick={buttonLogoutOnClickHandler}>Logout</Button>
                  </Typography>
                ) : (
                  ""
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
