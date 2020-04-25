import React from  "react";
import "./Schedule.scss";

const Schedule = (props) => {
  return <div className="schedule">
    <h3 className="title">{props.name}</h3>
    { props.schedule.map((day, i) => <div key={i}>{day}</div> )}
  </div>
}

export default Schedule;