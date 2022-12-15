import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Products_Page/Product";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
