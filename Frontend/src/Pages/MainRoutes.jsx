import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./Products_Page/Product";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};
export default MainRoutes;
