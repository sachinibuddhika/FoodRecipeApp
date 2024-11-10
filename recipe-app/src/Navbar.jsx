import * as React from "react";
import { AppBar, Tabs, Tab, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        width: "100%",
        zIndex: 1300,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                marginLeft: "50px",
                width: "120px",
                height: "auto",
              }}
            />
          </Link>
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "auto",
          }}
        >
          <Button
            component={Link}
            to="/home"
            sx={{
              margin: "0 20px",
              color: "black",
              fontWeight: location.pathname === "/home" ? "bold" : "normal",
            }}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/favourite"
            sx={{
              margin: "0 20px",
              color: "black",
              fontWeight:
                location.pathname === "/favourite" ? "bold" : "normal",
            }}
          >
            Favourites
          </Button>
        </div>

        <IconButton
          aria-label="logout"
          onClick={handleLogout}
          sx={{ color: "black" }}
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
