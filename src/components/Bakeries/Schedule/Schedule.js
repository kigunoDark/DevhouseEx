import React from  "react";
import "./Schedule.scss";

const Schedule = (props) => {
  return <div className="schedule">
    {props.err ? 
    <div>
      <h3 className="title"> Shchedule in a process </h3>
      <p> Schedule will be made soon... </p>   
    </div> : 
    <div>
      <h3 className="title">{props.name}</h3>
    { props.schedule.map((day, i) => <div key={i}>{day}</div> )}
    </div>}
  </div>
}

export default Schedule;