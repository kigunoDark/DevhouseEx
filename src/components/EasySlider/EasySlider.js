import React from "react";
import "./EasySlider.scss";
import Slider from "react-slick";
import {settings} from "./settings/sliderSettings.js"
import {
  NavLink,
} from "react-router-dom";

const EasySlider = (props) => {
  return (
    <div className="slider">
      {props.bakeries.length > 0 ? (
        <Slider {...settings}>
          {props.bakeries
            .filter((b) => b !== null)
            .map((b, i) => (
              <div key={i} className="slider__item">
                <NavLink to={`/schedule/${b.name}`}> 
                  <img
                    className="slider__img"
                    src={`http://api.dev.cakeiteasy.no/api/store/images/${b.picture}/?size=small_url&compress_type=webp`}
                    alt=""
                  />
                </NavLink>
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
