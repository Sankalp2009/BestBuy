import React from "react";

import { Routes, Route } from "react-router-dom";

import { Cart } from "../Components/Cart/Cart";

import Checkout from "../Components/Checkout/Checkout";
import Payment from "../Components/Payment/Payment";

import { Otp } from "../Components/Payment/Otp";
const MainRoutes = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
     
      <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
       
        <Route path="/otp" element={<Otp />} />
       
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default MainRoutes;
