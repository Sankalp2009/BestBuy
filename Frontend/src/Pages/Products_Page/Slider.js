import React from "react";
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss'
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"


const data = [
  {
    id: 1,
    name: "Acer 15.6 Laptop - Silver (Intel Pentium Silver N6000/256GB SSD/8GB RAM/Windows 11)",
    price: '$399.99'
  },
  {
    id: 2,
    name: "Acer Aspire 3 15.6 Laptop - Black (Intel Core i5-1035G1/512GB/12GB RAM/Windows 11)",
    price: '$1200.99'
  },
  {
    id: 3,
    name: "Acer 17.6 Laptop - Silver (Intel Pentium Silver N6000/256GB SSD/8GB RAM/Windows 11)",
    price: '$1000.99'
  },
  {
    id: 4,
    name: "ASUS VivoBook M515 15.6 Laptop - Slate Grey (AMD Ryzen 3 3250U/512GB SSD/8GB RAM/Windows 11 Home)",
    price: '$399.99'
  },
  {
    id: 5,
    name: "HP 14 Laptop - Natural Silver (AMD Athlon Silver 3050U/128GB SSD/4GB RAM/Windows 11 S)",
    price: '$600.99'
  },
  {
    id: 6,
    name: "Acer 15.6 Laptop - Silver (Intel Pentium Silver N6000/256GB SSD/8GB RAM/Windows 11)",
    price: '$800.99'
  },
  {
    id: 7,
    name: "HP 14 Laptop - Natural Silver (AMD Athlon Silver 3050U/128GB SSD/4GB RAM/Windows 11 S)",
    price: '$399.99'
  },
  {
    id: 8,
    name: "Acer 15.6 Laptop - Silver (Intel Pentium Silver N6000/256GB SSD/8GB RAM/Windows 11)",
    price: '$599.99'
  }
]
const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide key={user.id} className="slide" >
          <div className="slide-content">
            <div className="user-image">
              <img
                src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/164/16433/16433550.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="carousel-panel">
        <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16036/16036532.jpg" alt="check" />
      </div>
      <div class="carousel-panel">
        <img src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16036/16036532.jpg" alt="check" />
      </div>
      <div id="trending">
        <h1>Top Selling Products</h1>
        <section className="sliderdiv">
          <div className="container">
            <div className="swiper card_slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="">
                    <div className="imgdiv">
                      <img
                        src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/164/16433/16433550.jpg"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="">
                    <div className="imgdiv">
                      <img
                        src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/164/16433/16433552.jpg"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="">
                    <div className="imgdiv">
                      <img
                        src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/165/16529/16529674.jpg"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="">
                    <div className="imgdiv">
                      <img
                        src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15371/15371258.jpg"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="">
                    <div className="imgdiv">
                      <img
                        src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15758/15758822.jpeg"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="">
                    <div className="imgdiv">
                      <img
                        src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15758/15758822.jpeg"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="">
                    <div className="imgdiv">
                      <img
                        src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15743/15743187.jpg"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="">
                    <div className="imgdiv">
                      <img
                        src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16036/16036532.jpg"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Slider;
var carousel = new Carousel({
  panels: document.getElementsByClassName('carousel-panel')
});

carousel.goTo(1);
