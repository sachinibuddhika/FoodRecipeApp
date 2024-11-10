import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import logo from "./assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    if (name === "confirmpassword" && inputs.password !== value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmpassword: "The password does not match",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};
    if (!inputs.fname) formErrors.fname = "Please enter the first name";
    if (!inputs.email) formErrors.email = "Please enter the email";
    if (!inputs.phone) formErrors.phone = "Please enter the phone number";
    if (!inputs.password) formErrors.password = "Please enter a password";
    if (inputs.password !== inputs.confirmpassword) {
      formErrors.confirmpassword = "The password does not match";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    axios
      .post("http://localhost:3001/register", inputs, { timeout: 5000 })
      .then((result) => console.log(result));
    navigate("/login").catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
                value={inputs.fname}
                onChange={handleChange}
                label="Your Name*"
                type={"text"}
                placeholder="First Name"
                fullWidth
                error={!!errors.fname}
                helperText={errors.fname}
              />
              <TextField
                name="lname"
                value={inputs.lname}
                onChange={handleChange}
                type={"text"}
                fullWidth
                placeholder="Last Name"
                error={!!errors.lname}
                helperText={errors.lname}
              />
              <TextField
                name="email"
                value={inputs.email}
                onChange={handleChange}
                type={"email"}
                label="Email*"
                fullWidth
                placeholder="abc@gmail.com"
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                name="phone"
                value={inputs.phone}
                onChange={handleChange}
                label="Phone number*"
                type="number"
                fullWidth
                placeholder="011 2222 333"
                error={!!errors.phone}
                helperText={errors.phone}
              />
              <TextField
                name="password"
                value={inputs.password}
                onChange={handleChange}
                label="Password*"
                type="password"
                placeholder="******"
                fullWidth
                error={!!errors.password}
                helperText={errors.password}
              />
              <TextField
                name="confirmpassword"
                value={inputs.confirmpassword}
                onChange={handleChange}
                label="Confirm Password*"
                type="password"
                placeholder="******"
                fullWidth
                error={!!errors.confirmpassword}
                helperText={errors.confirmpassword}
              />

              <Button
                type="submit"
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
            <Typography variant="body2" textAlign="center">
              Already have an account?{" "}
              <Link
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#fe5e7f",
                }}
                to="/login"
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </form>
    </div>
  );
}

export default Signup;
