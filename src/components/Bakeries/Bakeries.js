import React from "react";
import "./Bakeries.scss";
import ShortInfo from "./ShortInfo/ShortInfo";
import EasySlider from "../EasySlider/EasySlider";
import ScheduleContainer from "./Schedule/ScheduleContainer";
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const Bakeries = (props) => {
  return (
    <div className="bakeries">
      <NavLink to="/"> <h3 className="title">The best bakeries</h3> </NavLink>
      <EasySlider bakeries={props.bakeries} />
        <Switch>
          <Route path="/schedule/:name" render = {() => <ScheduleContainer />} />
          <Route path="/"  render = {() => <ShortInfo />}/>
        </Switch>
    </div>
  );
};

export default Bakeries;
