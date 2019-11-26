import React from 'react';
import Slider from "react-slick";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    > <i className="fa fa-arrow-circle-left"></i>
    </div>
  );
};

export default PrevArrow;