import React, { useState, useEffect } from "react";
import EasySlider from "./EasySlider";
import { settings } from "./settings/sliderSettings";
import { mainApi } from "../../api/api.js";

const EasySlideContainer  = () => {
    const [bakeries, setBaker] = useState([]);

    useEffect(() => {
      (async function() {
        try {
          let bakeries = await mainApi.getBakeries();
          bakeries = bakeries.filter(b => b.picture !== null);
          setBaker(bakeries);
        } catch(err) {
          console.log(err)
        }
      })();
    }, []);
    
    return  <EasySlider settings={settings} bakeries={bakeries}/>;
}

export default EasySlideContainer;