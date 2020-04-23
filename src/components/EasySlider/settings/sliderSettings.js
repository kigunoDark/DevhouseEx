import React from "react";

const PrewArrow = (props) => {
  const { onClick } = props;
  return (
    <i
      className={"fas fa-chevron-left"}
      style={{ display: "block", marginRight: "3%", cursor: "pointer" }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <i
      className={"fas fa-chevron-right"}
      style={{ display: "block", cursor: "pointer" }}
      onClick={onClick}
    />
  );
};

export const   settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};