import React from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Switch,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  getData,
  getFilterData,
  sortData,
} from "../../Redux/Product/Product.action";

import "./index.css";
const categories = [
  {
    title: "Computers & Tablets (207)",
    link: "#",
  },
  {
    title: "Appliances (180)",
    link: "#",
  },
  {
    title: "Home Living (164)",
    link: "#",
  },
  {
    title: "Audio (123)",
    link: "#",
  },
  {
    title: "Wearable Technology (103)",
    link: "#",
  },
  {
    title: "Smart Home (61)",
    link: "#",
  },
  {
    title: "Cameras & Camcorders (55)",
    link: "#",
  },
  {
    title: "Best Buy Mobile (38)",
    link: "#",
  },
  {
    title: "Health & Fitness (30)",
    link: "#",
  },
  {
    title: "Equipment (29)",
    link: "#",
  },
  {
    title: "Toys, Drones & Education (16)",
    link: "#",
  },
  {
    title: "Baby & Maternity (9)",
    link: "#",
  },
  {
    title: "Car Electronics and GPS (7))",
    link: "#",
  },
  {
    title: "Personal Care (6)",
    link: "#",
  },
  {
    title: "Travel, Luggage & Bags (5)",
    link: "#",
  },
];

const brands = [
  "IPHONE",
  "AMAZON",
  "SAMSUNG",
  "ASUS",
  "HP",
  "ACER",
  "LG",
  "SONY",
  "DELL",
  "INSIGNIA",
  "NINTENDO",
  "MICROSOFT",
  "DYSON",
  "GOOGLE",
  "CANON",
  "LOGITECH",
];

let offers = [
  { title: "On Sale", value: "onSale" },
  { title: "Top Deals", value: "topDeals" },
  { title: "On Clearence", value: "onClearence" },
  { title: "Refurbished", value: "refurbished" },
  { title: "Open Box", value: "openBox" },
  { title: "Online Only", value: "onlineOnly" },
];

const ProductsInfo = () => {
  const [filter, setFilter] = useState([]);
  const [Prod, setProd] = useState([]);
  const [prodOffers, setprodOffers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");
  const [filterClick, setFilterClick] = useState(false);
  const { products, filterInfo } = useSelector((state) => state.products);
  const [sortValue, setSortValue] = useState("");

  let CopyData = [];
  CopyData = Prod;

  const handleChange = (e) => {
    setSortValue(e.target.value);
    if (e.target.value === "htl") {
      let copyData = products.sort();
      CopyData = copyData;
    }
    if (e.target.value === "lth") {
      let copyData = products.sort();
      CopyData = copyData;
    }
  };

  const Main = async () => {
    let response = await fetch(`${process.env.REACT_APP_URL}/api/v1/Products`);
    let data = await response.json();
    let banu = data.data.product;
    console.log(banu);
    setProd(banu);
  };

  const dispatch = useDispatch();
  // const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    Main();
  }, [Prod]);

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    if (filter.length || prodOffers.length) {
      console.log(filter, prodOffers, "Check in");

      setSearchParams({
        availability: filter,
        prodOffers,
      });

      // console.log(searchParams);
      let params = {
        availability: [...searchParams.getAll("availability")],
        prodOffers: [...searchParams.getAll("prodOffers")],
      };
      console.log(params);

      dispatch(getFilterData(params));
    } else {
      setFilterClick(false);
    }
  }, [filter, searchParams, prodOffers]);

  const getFilteredOpt = (e) => {
    setFilterClick(true);
    const index = filter.indexOf(e.target.value);

    if (index === -1) {
      setFilter([...filter, e.target.value]);
    } else {
      setFilter(filter.filter((el) => el != e.target.value));
    }
  };

  const getCOffers = (e) => {
    setFilterClick(true);
    const index = prodOffers.indexOf(e.target.value);

    if (index === -1) {
      setprodOffers([...prodOffers, e.target.value]);
    } else {
      setprodOffers(prodOffers.filter((el) => el != e.target.value));
    }
  };

  return (
    <div className="info">
      <div className="Container">
        <h1 className="title">Products Page</h1>
        <div className="smallContainer">
          <div className="sidebar">
            {/* categories */}
            <Accordion disableGutters={true}>
              <AccordionSummary
                className="categories"
                id="panel1-header"
                // aria-aria-controls="panel1-content"
                expandIcon={<ExpandMoreIcon />}
              >
                Categories
              </AccordionSummary>
              <AccordionDetails>
                {categories.map((el, i) => {
                  return (
                    <Typography key={i} className="options">
                      <a
                        href={el.link}
                        style={{ textDecoration: "none", color: "#1d252c" }}
                      >
                        {el.title}
                      </a>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>

            {/* Availibility */}
            <Accordion disableGutters={true}>
              <AccordionSummary
                id="panel2-header"
                // aria-aria-controls="panel2-content"
                expandIcon={<ExpandMoreIcon />}
              >
                Availability
              </AccordionSummary>
              <AccordionDetails className="checkBoxes">
                <FormControl>
                  <FormControlLabel
                    label="Get it Shipped"
                    control={
                      <Checkbox
                        value="getItShipped"
                        checked={filter.includes("getItShipped")}
                        onChange={getFilteredOpt}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Pick Up at Nearby Store"
                    control={
                      <Checkbox
                        value="pickUpAtNearbyStore"
                        checked={filter.includes("pickUpAtNearbyStore")}
                        onChange={getFilteredOpt}
                      />
                    }
                  />
                </FormControl>
              </AccordionDetails>
            </Accordion>

            {/* Offers */}
            <Accordion disableGutters={true}>
              <AccordionSummary
                id="panel3-header"
                // aria-aria-controls="panel3-content"
                expandIcon={<ExpandMoreIcon />}
              >
                Currant Offers
              </AccordionSummary>
              <AccordionDetails className="checkBoxes">
                {offers.map((el, i) => {
                  return (
                    <FormControlLabel
                      label={el.title}
                      key={i}
                      control={
                        <Checkbox
                          value={el.value}
                          checked={prodOffers.includes(el.value)}
                          onChange={getCOffers}
                        />
                      }
                    />
                  );
                })}
              </AccordionDetails>
            </Accordion>

            {/* Price */}
            <Accordion disableGutters={true}>
              <AccordionSummary
                id="panel4-header"
                // aria-aria-controls="panel4-content"
                expandIcon={<ExpandMoreIcon />}
              >
                Price
              </AccordionSummary>
              <AccordionDetails>
                <form action="">
                  <div className="priceContainer">
                    <div>
                      <label>Min</label>
                      <input type="number" placeholder="$" />
                    </div>
                    <div>
                      <label>Max</label>
                      <input type="number" placeholder="$" />
                    </div>
                  </div>
                  <button type="submit" className="submitPriceFilter">
                    Apply Price Change
                  </button>
                </form>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="products">
            <div className="topBar">
              <div>
                <h3>No of products</h3>
              </div>
              <div>
                <p>
                  <span>In Stock</span> <Switch />
                </p>
                <p>
                  <span>Best Buy Only</span> <Switch />
                </p>
                <p>
                  Sort
                  <span>
                    <Select
                      sx={{ m: 1, minWidth: 130 }}
                      name="sortBy"
                      id=""
                      onChange={(e) => handleChange(e)}
                    >
                      <MenuItem value="">Best Match</MenuItem>
                      <MenuItem value="htl">Price High-Low</MenuItem>
                      <MenuItem value="lth">Price Low-High</MenuItem>
                      <MenuItem value="sr">Highest Rated</MenuItem>
                    </Select>
                  </span>
                </p>
              </div>
            </div>
            <div className="productGrid">
              {Prod.map((el, id) => (
                <div className="banu" key={el._id}>
                  <Link to={`/${el._id}`} className="solo">
                    <div className="pick">
                      <img src={el.image[0]} alt="prod_image" />
                    </div>
                    <div className="descDiv">
                      <p className="name">{el.name}</p>
                      <p className="ratings">
                        <b>⭐⭐⭐⭐ {el.rating}</b>
                      </p>
                      <p className="price">
                        Price: <i>${el.price}</i>{" "}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsInfo;
