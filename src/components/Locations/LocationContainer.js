import React, { useEffect, useState } from "react";
import Location from './Location';
import * as axios from "axios";

const LocationContainer = () => {
  let [location, setLocation] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        let locations = await axios.get(
          "http://api.dev.cakeiteasy.no/api/store/cities/?country_code=no&most_popular=true"
        );
        setLocation(locations.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Location locations={location}/>
  )
};

export default LocationContainer;
