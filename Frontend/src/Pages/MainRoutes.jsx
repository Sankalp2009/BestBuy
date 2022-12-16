import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Products_Page/Product";
import Detailsitem from "./Product_Detail_Page/Detailsitem";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />} />
        <Route path="/products/single/:id" element={<Detailsitem />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
