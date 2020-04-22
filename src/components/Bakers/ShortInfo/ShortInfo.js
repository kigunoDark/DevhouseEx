import React from "react";
import coffee from "../../../imgs/coffee.jpg";
import lollipop from "../../../imgs/lollipop.jpg";
import cake2 from "../../../imgs/cake2.png";
import "./ShortInfo.scss";

const ShortInfo = () => {
  return (
    <div className="short_info">
      <div className="short_info__item">
        <img src={coffee} className="short_info__img" alt="1" />
        <p className="short_info__text">Hand made by local bakeries</p>
      </div>
      <div className="short_info__item">
        <img src={lollipop} className="short_info__img"  alt="2"/>
        <p className="short_info__text">
          Same price as from bakery - but simpler
        </p>
      </div>
      <div className="short_info__item">
        <img src={cake2} className="short_info__img" alt="3" />
        <p className="short_info__text">Send cakes anywhere </p>
      </div>
    </div>
  );
};

export default ShortInfo;
