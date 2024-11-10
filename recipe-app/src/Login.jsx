import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import logo from "./assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //#eae7e7

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: inputs.email,
        password: inputs.password,
      });

      if (response.data.message === "Success") {
        localStorage.setItem("email", inputs.email);
        navigate("/home");
      } else {
        setErrors({ ...errors, password: "Invalid credentials" });
      }
    } catch (err) {
      console.error("Login failed:", err);
      setErrors({ ...errors, email: "An error occurred. Please try again." });
    }
  };

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

            <Typography variant="h5" align="left">
              Login
            </Typography>
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

            <Button
              type="submit"
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
      </form>
    </div>
  );
}

export default Login;
