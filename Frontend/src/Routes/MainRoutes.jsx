import React from "react";
// import SliderComp from "../components/topDeals/SliderComp";
// import ProductContainer from "../pages/ProductPage/ProductContainer";
// import TopDeals from "../pages/TopDeals/TopDeals";
import { Routes, Route } from "react-router-dom";
// import { ProductContainer } from "../pages/ProductPage/ProductContainer";
// import Detailsitem from "../pages/Product Detail Page/Detailsitem";
import { Cart } from "../Components/Cart/Cart";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import Checkout from "../Components/Checkout/Checkout";
// import Payment from "../Components/Payment/Payment";
// import HomePage from "../pages/HomePage";
// import GeekSquad from "../pages/GeekSquad";
// import Signin from "../pages/Auth/Signin";
// import Signup from "../pages/Auth/Signup";
// import { Otp } from "../Components/Payment/Otp";
// import GeekSquad from "../pages/GeekSquad";
const MainRoutes = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/topdeals" element={<TopDeals />} />
        <Route path="/products/:id" element={<ProductContainer />} />
        <Route path="/products/single/:id" element={<Detailsitem />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
        {/* <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/otp" element={<Otp />} /> */}
        {/* <Route path="/geeksquad" element={<GeekSquad />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default MainRoutes;
