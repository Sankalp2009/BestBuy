import { Button } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Payment/Footer";
import styles from "./Home.module.css";

const Home = () => {
  const shopdealsData = [
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_6502179-MMT-569003-0808-ec85fc42-4049-476f-ad8a-ad9e94e5607b.jpg;maxWidth=220",
      shopdeals_name: "Laptops & Computers",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502215_sd.jpg;maxWidth=220",
      shopdeals_name: "TVs & Projectors",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-apple-d28633c9-bbe5-4f83-a0f6-55b738306ae1.jpg;maxWidth=220",
      shopdeals_name: "Apple",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456332_sd.jpg;maxWidth=220",
      shopdeals_name: "Video Games, Consoles & VR",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6519/6519950_sd.jpg;maxWidth=220",
      shopdeals_name: "Cell Phones",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-606895-ghp-img-icons-mappls-2157cc1d-a86a-48d0-98a3-15110ca655c7.jpg;maxWidth=220",
      shopdeals_name: "Major Appliances",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505727_sd.jpg;maxWidth=220",
      shopdeals_name: "Headphones",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500695_rd.jpg;maxWidth=220",
      shopdeals_name: "PC Gaming",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-623320-ghp-img-icons-tablets-309e6e1b-379c-438d-b57c-7e6450a91e6e.jpg;maxWidth=220",
      shopdeals_name: "Tablets & E-Readers",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6213/6213100_sd.jpg;maxWidth=220",
      shopdeals_name: "Cameras, Camcorders & Drones",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454256_sd.jpg;maxWidth=220",
      shopdeals_name: "Sound Bars, Speakers & Streaming Devices",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510885_sd.jpg;maxWidth=220",
      shopdeals_name: "Wearable Technology",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-smappls-bfa220bd-fca3-447c-ab2e-3c88aaebea36.jpg;maxWidth=220",
      shopdeals_name: "Small Appliances, Floor Care & Home Air Quality",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-602732-ghp-img-icons-printers-4bdae295-d0ae-45df-a950-a2411f6c1637.jpg;maxWidth=220",
      shopdeals_name: "Printers, Home Office & Computer Accessories",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461319_sd.jpg;maxWidth=220",
      shopdeals_name: "Smart Home, Security & Wi-Fi",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-toys-dbd5f58e-beb9-4ca2-8d48-3db5e29c5e63.jpg;maxWidth=220",
      shopdeals_name: "Toys, Games, Collectibles & Movies",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502458_sd.jpg;maxWidth=220",
      shopdeals_name: "Electric Transportation",
    },
    {
      shopdeals_image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-health-1c7229b6-26c8-44a1-94ea-62315c8c6a4b.jpg;maxWidth=220",
      shopdeals_name: "Health, Fitness & Personal Care",
    },
  ];
  const arrivalData = [
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522220_rd.jpg;maxHeight=400;maxWidth=400",
      name: "Meta - Quest 2 Resident Evil 4 Bundle with Beat Saber - 128GB",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522220_rd.jpg;maxHeight=400;maxWidth=400",
      name: "Meta - Quest 2 Resident Evil 4 Bundle with Beat Saber - 128GB",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522220_rd.jpg;maxHeight=400;maxWidth=400",
      name: "Meta - Quest 2 Resident Evil 4 Bundle with Beat Saber - 128GB",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522220_rd.jpg;maxHeight=400;maxWidth=400",
      name: "Meta - Quest 2 Resident Evil 4 Bundle with Beat Saber - 128GB",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522220_rd.jpg;maxHeight=400;maxWidth=400",
      name: "Meta - Quest 2 Resident Evil 4 Bundle with Beat Saber - 128GB",
    },
  ];
  return (
    <div style={{ paddingTop: "90px" }}>
      <div className={styles.home_container}>
        <div className={styles.home_container_header}>
          <div className={styles.home_container_header_left}>
            <h1>Great Deals.</h1>
            <h4>All in on place.</h4>
          </div>
          <div className={styles.home_container_header_right}>
            <h5>Find new deals all season long.</h5>
            <h6>
              Limited quantities. No rainchecks.<span>See Holiday FAQs</span>
            </h6>
            <button className={styles.home_container_header_btn}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className={styles.home_background}>
        <div className={styles.home_shopdeals}>
          <h5 className={styles.home_shopdeals_heading}>
            Shop deals by category
          </h5>
          <div className={styles.home_shopdeals_items}>
            {shopdealsData.map((el) => {
              return (
                <div className={styles.home_shopdeals_items_div}>
                  <img
                    className={styles.home_shopdeals_image}
                    src={el.shopdeals_image}
                    alt={el.shopdeals_name}
                    width="120"
                    height="120"
                  />

                  <h4 className={styles.home_shopdeals_name}>
                    {el.shopdeals_name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.home_newarrival}>
        <h5 className={styles.home_newarrival}>New arrivals</h5>
        <hr className={styles.home_newarrival_underline} />
        <hr />
        <div className={styles.home_newarrival_item}>
          {arrivalData.map((el) => {
            return (
              <div className={styles.home_newarrival_card}>
                <img src={el.image} alt={el.name} />
                <h6>{el.name}</h6>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.home_banner}>
        <div className={styles.home_banner_left}>
          <h1>Get gifts <span className={styles.highlighted_text}>fast</span>  — as soon as today.</h1>
        </div>
        <div className={styles.home_banner_right}>
          <button className={styles.home_banner_right_button}>Shop Now</button>
        </div>
      </div>
      <div className={styles.home_features}>
        <h4>Our featured offers</h4>
        <hr />
        <div className={styles.home_features_item}>
          <div className={styles.home_features_card}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-619648-pol-ase-112022-4ac773ac-3d86-4242-9b79-92e237ec8366.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <h3>Apple Shopping Event.</h3>
            <p>
              Save up to $400 on select MacBook models, plus more great deals.
            </p>
          </div>
          <div className={styles.home_features_card}>
            <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-622383-bose-pol_der-46400e06-763d-4772-8ebd-2676a7a23d62.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <h3>Save $150 on Bose Smart Soundbar 900.</h3>
            <p>
            Elevate all your content with Bose’s most immersive soundbar.
            </p>
          </div>
          <div className={styles.home_features_card}>
            <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-604757_der-7718877d-e4a0-4e31-831d-c6ecbbe6d814.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <h3>Save $50 on the Xbox Series S.</h3>
            <p>
            Enjoy next-gen gaming on this all-digital console.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.home_banner}>
        <div className={styles.home_banner_left}>
          <h1 ><span className={styles.highlighted_text}>18</span> month financing</h1>
        </div>
        <div className={styles.home_banner_right}>
          <button className={styles.home_banner_right_button}>Learn More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
