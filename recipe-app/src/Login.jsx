import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import logo from "./assets/logo.png";

function Login() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth={600}
      alignItems="center"
      justifyContent="center"
      margin="auto"
      marginTop={5}
      padding={5}
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(1, 1fr)"
        gap={2}
        padding={5}
        borderRadius={2}
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "120px",
              height: "auto",
            }}
          />
        </Box>

        <Typography variant="h5" align="left">
          Login
        </Typography>

        <TextField
          required
          label="Email address"
          fullWidth
          placeholder="abc@gmail.com"
        />

        <TextField required label="Password" type="password" fullWidth />

        <Button
          variant="contained"
          color="secondary"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            justifyContent: "center",
            backgroundColor: "#fe5e7f",
            whiteSpace: "nowrap",
          }}
        >
          SIGN IN
        </Button>

        <Typography variant="body2" align="center">
          Don't you have an Account?{" "}
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              color: "#fe5e7f",
            }}
          >
            Create an account
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
