import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <div className="swiper">
      <h1 style={{padding:"2%"}} >Top Selling Products</h1>
      <br/>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="slide-content">
            <div className="user-image">
              <img
                className="user-photo"
                src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/165/16529/16529674.jpg"
                alt=""
              />
              <br />
              <h5 className="user-name">
                Acer 15.6 Laptop - Silver (Intel Pentium Silver N6000/256GB
                SSD/8GB RAM/Windows 11)
              </h5>
              <br />
              <p className="user-price">
                <span>Price: <i>$399.99 </i></span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="user-image">
              <img
                className="user-photo"
                src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15743/15743187.jpg"
                alt=""
              />
              <br />
              <h5 className="user-name">
              Acer Aspire 3 15.6 Laptop - Black (Intel Core i5-1035G1/512GB/12GB RAM/Windows 11)
              </h5>
              <br />
              <p className="user-price">
                <span>Price: <i>$1200.99</i></span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="user-image">
              <img
                className="user-photo"
                src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/162/16250/16250540.jpg"
                alt=""
              />
              <br/>
              <h5 className="user-name">
              Acer 17.6 Laptop - Silver (Intel Pentium Silver N6000/256GB SSD/8GB RAM/Windows 11)
              </h5>
              <br/>
              <p className="user-price">
                <span>Price: <i>$1000.99</i></span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="user-image">
              <img
                className="user-photo"
                src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/159/15999/15999467.jpeg"
                alt=""
              />
              <h5 className="user-name">
              ASUS VivoBook M515 15.6 Laptop - Slate Grey (AMD Ryzen 3 3250U/512GB SSD/8GB RAM/Windows 11 Home)
              </h5>
              <p className="user-price">
                <span>Price: <i>$399.99 </i></span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="user-image">
              <img
                className="user-photo"
                src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/164/16433/16433550.jpg"
                alt=""
              />
              <br/>
              <h5 className="user-name">
              HP 14 Laptop - Natural Silver (AMD Athlon Silver 3050U/128GB SSD/4GB RAM/Windows 11 S)
              </h5>
              <br/>
              <p className="user-price">
                <span>Price: <i>$600.99</i></span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper >
    </div >
  );
}
