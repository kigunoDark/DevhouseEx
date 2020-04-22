import React from "react";
import "./Location.scss";

const Location = (props) => {
  return (
    <div className="location">
      <div className="container">
        <h1 className="title">Our most popular locations</h1>
        <div className="location__list">
          {props.locations.map((l, i) => (
            <div className="location__name" key={i}>
              {l.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;
