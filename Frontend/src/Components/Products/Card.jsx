import React from "react";
import { MdDone } from "react-icons/md";

const Card = ({ name,price,rating }) => {
  return (
    <div className="bestCard">
      <Link to={`/products/single/${_id}`} className="solo">
        <div className="pick">
          <img src={image[0]} alt="prod_image" />
        </div>
        <div className="descDiv">
          <p className="title">{name}</p>
          <p className="ratings"> {rating}</p>
          {top ? <p className="topDeal">{top}</p> : ""}
          <p className="price">
            ${price}{" "}
            {save ? (
              <span style={{ fontSize: "12px" }}>save ${save} </span>
            ) : (
              ""
            )}
          </p>
          {end ? (
            <p className="available">
              <span>{<MdDone />}</span> <span>{end}</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
