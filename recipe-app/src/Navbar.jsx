import * as React from "react";
import { AppBar, Tabs, Tab, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div style={{ backgroundColor: "#f5e0e0", minHeight: "100vh" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
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
                color: "#fe5e7f",
              }}
            >
              Home
            </Button>

            <Button
              component={Link}
              to="/favourite"
              sx={{
                margin: "0 20px",
                color: "#fe5e7f",
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
    </div>
  );
}

export default Navbar;
