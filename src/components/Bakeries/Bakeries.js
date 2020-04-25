import React from "react";
import EasySlideContainer from "../EasySlider/EasySliderContainer";
import "./Bakeries.scss";
import ShortInfo from "./ShortInfo/ShortInfo";
import ScheduleContainer from "./Schedule/ScheduleContainer";

const Bakeries = () => {
  return (
    <div className="bakeries">
       {/* <ScheduleContainer /> */}
      <h3 className="title">The best bakeries</h3>
      <EasySlideContainer />
      <ShortInfo />
    </div>
  );
};

export default Bakeries;
