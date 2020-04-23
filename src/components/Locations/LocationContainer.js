import React, { useEffect, useState } from "react";
import Location from './Location';
import {mainApi} from '../../api/api';

const LocationContainer = () => {
  let [location, setLocation] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        let locations = await mainApi.getLocations();
        setLocation(locations);
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