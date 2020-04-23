import React from "react";
import EasySlideContainer from "../EasySlider/EasySliderContainer";
import "./Bakeries.scss";
import ShortInfo from "./ShortInfo/ShortInfo";

const Bakeries = () => {
  return (
    <div className="bakeries">
      <h3 className="title">The best bakeries</h3>
      <EasySlideContainer />
      <ShortInfo />
    </div>
  );
};

export default Bakeries;
