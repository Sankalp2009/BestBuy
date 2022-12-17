import React from "react";
import { ProductPageContainer } from "./Product.styled";
import ProductCard from "../../Components/ProductPage/ProductCard";
import { useSearchParams } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import axios from "axios";
import { Switch } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../../Redux/Product Reducer/action";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
// import { filterData } from "../../Redux/Product Reducer/action";
import { getFilterData, sortData } from "../../Redux/Product Reducer/action";

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
    title: "Musical Instruments & Equipment (29)",
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
const ProductContainer = () => {
  // const [data, setData] = useState([]);
  const [filterOtions, setFilterOptions] = useState([]);
  const [currantOffers, setCurrantOffers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const [filterBrands, setBrands] = useState([]);
  const [filterClick, setFilterClick] = useState(false);
  const { products, filterData, isLoading, isError } = useSelector(
    (state) => state.products
  );
  // const [sort, setSort] = useState(searchParams.get("sortby") || "");
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  // console.log(sort, "sortBy");
  useEffect(() => {
    dispatch(getData(id));

    // if (sort) {
    //   sortByPrice(sort);
    // }
  }, [dispatch]);

  useEffect(() => {
    if (filterOtions.length || currantOffers.length || filterBrands.length) {
      console.log(
        filterOtions,
        currantOffers,
        filterBrands,
        "Check in useEffect"
      );

      setSearchParams({
        availability: filterOtions,
        currantOffers,
        filterBrands,
      });
      // console.log(searchParams);
      let params = {
        availability: [...searchParams.getAll("availability")],
        currantOffers: [...searchParams.getAll("currantOffers")],
        filterBrands: [...searchParams.getAll("filterBrands")],
      };
      console.log(params);

      // filterData(params, data);
      // getFilteredDataFromServer(params);
      dispatch(getFilterData(params));
    } else {
      setFilterClick(false);
    }
  }, [filterOtions, searchParams, currantOffers, filterBrands]);

  const getFilteredOpt = (e) => {
    setFilterClick(true);
    const index = filterOtions.indexOf(e.target.value);

    if (index === -1) {
      setFilterOptions([...filterOtions, e.target.value]);
    } else {
      setFilterOptions(filterOtions.filter((el) => el != e.target.value));
    }
  };

  const getCOffers = (e) => {
    setFilterClick(true);
    const index = currantOffers.indexOf(e.target.value);

    if (index === -1) {
      setCurrantOffers([...currantOffers, e.target.value]);
    } else {
      setCurrantOffers(currantOffers.filter((el) => el != e.target.value));
    }
  };

  const getBrands = (e) => {
    setFilterClick(true);
    const index = filterBrands.indexOf(e.target.value);

    if (index === -1) {
      setBrands([...filterBrands, e.target.value]);
    } else {
      setBrands(filterBrands.filter((el) => el != e.target.value));
    }
  };

  // async function getFilteredDataFromServer(params) {
  //   console.log(res);
  // }

  const sortByPrice = (val) => {
    setFilterClick(true);

    const payload = filterClick ? filterData : products;

    dispatch(sortData(val, payload));
  };

  // if (isLoading)
  //   return (
  //     <div
  //       className="loading"
  //       style={{
  //         position: "absolute",
  //         top: "50%",
  //         left: "50%",
  //         transform: "translate(-50%, -50%)",
  //       }}
  //     >
  //       <CircularProgress />
  //     </div>
  //   );
  // if (isError) return <h1 className="error">Something went wrong</h1>;
  return (
    <ProductPageContainer>
      <div className="CONTAINER">
        <p className="titleOfComp">Product Page</p>
        <div className="container">
          <div className="sideBarOptions">
            {/* Categories Accordian */}
            <Accordion disableGutters={true}>
              <AccordionSummary
                className="categories"
                id="panel1-header"
                aria-aria-controls="pane1-content"
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
                aria-aria-controls="pane2-content"
                expandIcon={<ExpandMoreIcon />}
              >
                Availability
              </AccordionSummary>

              <AccordionDetails className="checkBoxesCon">
                {/* <Typography>
                  <Checkbox />
                  <span>Get it Shipped</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>Pick Up at Nearby Store</span>
                </Typography> */}
                <FormControl>
                  {/* <FormLabel>Availibility</FormLabel> */}
                  <FormControlLabel
                    label="Get it Shipped"
                    control={
                      <Checkbox
                        value="getItShipped"
                        checked={filterOtions.includes("getItShipped")}
                        onChange={getFilteredOpt}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Pick Up at Nearby Store"
                    control={
                      <Checkbox
                        value="pickUpAtNearbyStore"
                        checked={filterOtions.includes("pickUpAtNearbyStore")}
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
                aria-aria-controls="pane3-content"
                expandIcon={<ExpandMoreIcon />}
              >
                Currant Offers
              </AccordionSummary>

              <AccordionDetails className="checkBoxesCon">
                {offers.map((el, i) => {
                  return (
                    <FormControlLabel
                      label={el.title}
                      key={i}
                      control={
                        <Checkbox
                          value={el.value}
                          checked={currantOffers.includes(el.value)}
                          onChange={getCOffers}
                        />
                      }
                    />
                  );
                })}
                {/* <Typography>
                  <Checkbox />
                  <span>On Sale</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>Top Deals</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>On Clearence</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>Best Buy Exclusive</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>Refurbished</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>Open Box</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>Online Only</span>
                </Typography> */}
              </AccordionDetails>
            </Accordion>
            {/* Price */}
            <Accordion disableGutters={true}>
              <AccordionSummary
                id="panel4-header"
                aria-aria-controls="pane4-content"
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
            {/* Discount */}
            <Accordion disableGutters={true}>
              <AccordionSummary
                id="panel5-header"
                aria-aria-controls="pane5-content"
                expandIcon={<ExpandMoreIcon />}
              >
                Discount
              </AccordionSummary>

              <AccordionDetails className="checkBoxesCon">
                <Typography>
                  <Checkbox />
                  <span>60% off or More</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>50% off or More</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>40% off or More</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>30% off or More</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>20% off or More</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>All Discounted Items</span>
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Brands */}
            <Accordion disableGutters={true}>
              <AccordionSummary
                id="panel6-header"
                aria-aria-controls="pane6-content"
                expandIcon={<ExpandMoreIcon />}
              >
                Brands
              </AccordionSummary>
              <AccordionDetails className="checkBoxesCon">
                {brands.map((el, i) => {
                  return (
                    <FormControlLabel
                      label={el}
                      key={i}
                      control={
                        <Checkbox
                          value={el}
                          checked={filterBrands.includes(el)}
                          onChange={getBrands}
                        />
                      }
                    />
                  );
                })}
                {/* {brands.map((el, i) => {
                  return (
                    <Typography key={i}>
                      <Checkbox />
                      <span>{el}</span>
                    </Typography>
                  );
                })} */}
              </AccordionDetails>
            </Accordion>
            {/* Ratings */}
            <Accordion disableGutters={true}>
              <AccordionSummary
                id="panel5-header"
                aria-aria-controls="pane5-content"
                expandIcon={<ExpandMoreIcon />}
              >
                Coustomer Rating
              </AccordionSummary>

              <AccordionDetails className="checkBoxesCon">
                <Typography>
                  <Checkbox />
                  <span>5</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>4</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>3</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>2</span>
                </Typography>
                <Typography>
                  <Checkbox />
                  <span>1</span>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="products">
            <div className="topBar">
              <div>
                <p>No of products</p>
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
                    <select
                      name="sortBy"
                      id=""
                      onChange={(e) => {
                        sortByPrice(e.target.value);
                        // setSort(e.target.value);
                        // setSearchParams({
                        //   ...searchParams,
                        //   sortby: e.target.value,
                        // });
                      }}
                    >
                      <option value="">Best Match</option>
                      <option value="htl">Price High-Low</option>
                      <option value="lth">Price Low-High</option>
                      <option value="sr">Highest Rated</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="productGrid">
              {[...(filterClick ? filterData : products)].map((el, i) => {
                return <ProductCard {...el} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </ProductPageContainer>
  );
};

export default ProductContainer;
