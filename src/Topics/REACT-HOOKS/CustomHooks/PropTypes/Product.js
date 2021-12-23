import React from "react";
import PropTypes from "prop-types";
import DefaultImage from "../../../../css/Images/No-image.jpg";

export const Product = ({ image, name, price }) => {
  const ifurl = image && image.url; //if iamge is there then take image else take image.url
  return (
    <li className="product">
      {/* Another way to give default value to props */}
      <img src={ifurl || DefaultImage} alt={name} className="img-thumbnail" />
      <h4>{name || "NO_NAME"}</h4>${price || 0}
    </li>
  );
};

// write rafcp like racp but it writes proptype property too.
// Tells which value is missing in api
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// to give default value to props
// Product.defaultProps = {
//   name: "NO_NAME",
//   price: 0,
//   image: DefaultImage,
// };
