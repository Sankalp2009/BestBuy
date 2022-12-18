import React from "react";
import TopDealsImage from "../../Assets/Icon.png";
import QuickPage from "../../Assets/quick.png";
import { useState } from "react";

import styled from "styled-components";
import Deals from "../../Components/Products/Deals1";
import Slider from "./Slider";

const MainTopDeals = styled.div`
  /* border: 1px solid black; */
  width: 80rem;
  padding: 50px 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 45px;

  /* Banner */
  .topImageBanner {
    /* border: 1px solid black; */
    background-image: url("https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte6b53642872d8d96/61d4bb3bc455652925b7ab1c/global-topdeals-20220107-title-bg-s.jpg?width=150p&quality=80&auto=webp");
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px;
  }

  //center
  .quickSupportImage {
    /* border: 1px solid black; */
    width: 100%;
  }

  //CSS of fututre top deals
  .Deals1 {
  }
  //Title
  .titleOfComp {
    /* border: 1px solid black; */
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 30px;
  }

  .shpByCate {
    /* border: 1px solid black; */
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 30px;
    cursor: pointer;

    & > div {
      /* border: 1px solid black; */
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 10px;
      img {
        width: 110px;
      }
      p {
        color: #0046be;
        line-height: 20px;
        font-size: 14px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .advertiseMent {
    background-image: url("https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt84cbaa144b435751/620aa480e1d7c708f6601211/global-20220220-bar-happyhour-m.jpg?width=150p&quality=80&auto=webp");
    width: 100%;
    height: 185px;
    background-size: cover;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 30px;

    div {
      p {
        color: #ffffff;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
      }

      button {
        background-color: #ffffff;
        color: #0046be;
        height: 55px;
        width: 154px;
        margin-top: 30px;
        border: 0;
        cursor: pointer;
        width: 30%;
        font-weight: bold;
      }
    }
  }
`;

let Deals1 = [
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltabcad40d8d875509/622014d16f0333490a0e77bd/bbym-20220304-offer-ff-lockup-en-xs.jpg?width=828&quality=80&auto=webp",
    title: "The mobile sale you've been waiting for is here.",
    desc: "Check out the hottest deals on cell phones and plans. Sale ends Thursday, June 16.",
    link: "Explore the deals",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc175c8355e9c14ae/6298eaaeb86a794d785d42b0/sportsandrec-20220603-offer-top-deals-xs.jpg?width=828&quality=80&auto=webp",
    title: "Save up to $500 on select electric bikes.",
    desc: "Plus, get more deals on electric scooters and hoverboards.",
    link: "Shop Now",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt090e986a37bd806a/62a0dd531944ac5ac425ecf8/ht-20220610-offer-smart-light-xs.jpg?width=828&quality=80&auto=webp",
    title: "Save 25% when you buy 2 or more Philips Hue lights.",
    desc: "Create the perfect ambiance for any occasion with great deals on smart lights you can control with your phone.",
    link: "Shop Deals",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt515f5e34c7a113c9/629e3fc99bb72a0f7439ea32/ma-20220610-offer-td-2across-xs-evergreen.jpg?width=828&quality=80&auto=webp",
    title:
      "Save up to $1,000 with the purchase of 2 or more major kitchen appliances*.",
    desc: "",
    link: "Shop Deals",
  },
];

const TopDeals = () => {
  const [data, setData] = useState([]);

  return (
    <MainTopDeals>
      <h1
        className="topdeal"
        style={{ color: "black", textAlign: "left", marginTop: "4%" }}
      >
        Top Deals
      </h1>
      <div className="topImageBanner flex ">
        <img src={TopDealsImage} alt="" />
      </div>
      <img className="quickSupportImage" src={QuickPage} alt="" />
      <div>
        <p className="titleOfComp">Featured top deals</p>
        <Deals data={Deals1} />
      </div>
      <div>
        <Slider />
      </div>
      <div className="advertiseMent">
        <img
          src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1ca9ebcd9783f1c9/620aeba6f011e923b061d514/global-20220220-bar-happyhour-m-en.png?width=50p&quality=80&auto=webp"
          alt=""
        />
        <div>
          <p>Our next great deal? Help us choose</p>
          <button>Learn More</button>
        </div>
      </div>
    </MainTopDeals>
  );
};

export default TopDeals;
