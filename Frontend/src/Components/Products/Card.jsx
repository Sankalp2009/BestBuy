import React from "react";

const Card = ({ imgUrl, save, top, price, rate, title, end, _id }) => {
  return (
    <div className="bestCard">
      <Link to={`/products/single/${_id}`} className="solo">
        <div className="pick">
          <img src={imgUrl} alt="prod_image" />
        </div>
        <div className="descDiv">
          <p className="title">{title}</p>
          <p className="ratings"> {rate}</p>
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
