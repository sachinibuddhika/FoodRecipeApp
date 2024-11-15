import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Favourite from "./Favourite";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />

        <Route element={<LayoutWithNavbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function LayoutWithNavbar() {
  return (
    <>
      <Navbar />

      <div
        style={{
          paddingTop: "80px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default App;
