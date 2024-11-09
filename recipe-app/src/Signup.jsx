import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import logo from "./assets/logo.png";

function Signup() {
  const [inputs, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

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
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gap={2}
          padding={2}
          width="100%"
        >
          <Typography variant="h5" align="left" gridColumn="span 2">
            Register
          </Typography>

          <TextField
            name="fname"
            required
            label="Your Name"
            type={"text"}
            placeholder="First Name"
            fullWidth
          />
          <TextField
            name="lname"
            type={"text"}
            required
            fullWidth
            placeholder="Last Name"
          />
          <TextField
            name="email"
            required
            type={"email"}
            label="Email"
            fullWidth
            placeholder="abc@gmail.com"
          />
          <TextField
            name="phone"
            required
            label="Phone number"
            type="number"
            fullWidth
            placeholder="011 2222 333"
          />
          <TextField
            name="password"
            required
            label="Password"
            type="password"
            fullWidth
          />
          <TextField
            name="confirmpassword"
            required
            label="Confirm Password"
            type="password"
            fullWidth
          />

          <Button
            variant="contained"
            color="secondary"
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              alignSelf: "flex-start",
              backgroundColor: "#fe5e7f",
              whiteSpace: "nowrap",
            }}
          >
            Create Account
          </Button>
        </Box>
        <Typography variant="body2" align="center">
          Already have an Account?{" "}
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "#fe5e7f",
            }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Signup;
