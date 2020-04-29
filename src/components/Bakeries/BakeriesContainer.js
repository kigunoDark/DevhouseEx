import React, { useState, useEffect } from "react";
import Bakeries from "./Bakeries";
import { mainApi } from "../../api/api.js";

const BakeriesContainer = () => {
  const [bakeries, setBaker] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        let bakeries = await mainApi.getBakeries();
        bakeries = bakeries.filter((b) => b.picture !== null);
        setBaker(bakeries);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return <Bakeries bakeries={bakeries} /> 
};

export default BakeriesContainer;
