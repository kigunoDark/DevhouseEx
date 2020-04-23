import React from "react";
import "./EasySlider.scss";
import Slider from "react-slick";

const EasySlider = (props) => {
  return (
    <div className="slider">
      {props.bakeries.length > 0 ? (
        <Slider {...props.settings}>
          {props.bakeries
            .filter((b) => b !== null)
            .map((b, i) => (
              <div key={i} className="slider__item">
                <img
                  className="slider__img"
                  src={`http://api.dev.cakeiteasy.no/api/store/images/${b.picture}/?size=small_url&compress_type=webp`}
                  alt=""
                ></img>
              </div>
            ))}
        </Slider>
      ) : (
        // Такой более простой вариант типо загрузки от меня :)
        <div className="loading"> Loading... </div>
      )}
    </div>
  );
};

export default EasySlider;
