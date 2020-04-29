import React, { useEffect, useState } from "react";
import Location from "./Location";
import { mainApi } from "../../api/api";

const LocationContainer = () => {
  let [location, setLocation] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        // let locations = await mainApi.getLocations();

        let locations = [
          {
          "id": 164,
          "name": "Oslo",
          "country_code": "NO",
          "promo_note": "Bestill kaker direkte fra konditorier i Oslo. Velg kake, tilpass kaken med dine valg og velg levering eller henting. Kakebestilling har aldri vært enklere!",
          "most_popular": true
          },
          {
          "id": 358,
          "name": "Bergen",
          "country_code": "NO",
          "promo_note": "",
          "most_popular": true
          },
          {
          "id": 369,
          "name": "Trondheim",
          "country_code": "NO",
          "promo_note": "",
          "most_popular": true
          },
          {
          "id": 236,
          "name": "Asker",
          "country_code": "NO",
          "promo_note": "",
          "most_popular": true
          },
          {
          "id": 57,
          "name": "Moss",
          "country_code": "NO",
          "promo_note": "",
          "most_popular": true
          },
          {
          "id": 224,
          "name": "Lillestrøm",
          "country_code": "NO",
          "promo_note": "",
          "most_popular": true
          },
          {
          "id": 226,
          "name": "Sandnes",
          "country_code": "NO",
          "promo_note": "",
          "most_popular": true
          },
          {
          "id": 83,
          "name": "Ålesund",
          "country_code": "NO",
          "promo_note": "",
          "most_popular": true
          },
          {
          "id": 220,
          "name": "Vestnes",
          "country_code": "NO",
          "promo_note": "",
          "most_popular": true
          },
          {
          "id": 133,
          "name": "Kristiansund",
          "country_code": "NO",
          "promo_note": "Better city - super cakes! Order here and got super fast delivery and even small present from Cake It Easy for first 2000 customers!",
          "most_popular": true
          },
          {
          "id": 147,
          "name": "Halden",
          "country_code": "NO",
          "promo_note": "",
          "most_popular": true
          },
          {
          "id": 51,
          "name": "Fredrikstad",
          "country_code": "NO",
          "promo_note": "",
          "most_popular": true
          },
          {
            "id": 51,
            "name": "Fredrikstad",
            "country_code": "NO",
            "promo_note": "",
            "most_popular": true
          },
          {
            "id": 51,
            "name": "Fredrikstad",
            "country_code": "NO",
            "promo_note": "",
            "most_popular": true
            },
            {
              "id": 51,
              "name": "Fredrikstad",
              "country_code": "NO",
              "promo_note": "",
              "most_popular": true
              },

              {
                "id": 51,
                "name": "Fredrikstad",
                "country_code": "NO",
                "promo_note": "",
                "most_popular": true
                },
                
              {
                "id": 51,
                "name": "Fredrikstad",
                "country_code": "NO",
                "promo_note": "",
                "most_popular": true
                },
                
              {
                "id": 51,
                "name": "Fredrikstad",
                "country_code": "NO",
                "promo_note": "",
                "most_popular": true
                },
                
              {
                "id": 51,
                "name": "Fredrikstad",
                "country_code": "NO",
                "promo_note": "",
                "most_popular": true
                },
                {
                  "id": 147,
                  "name": "Halden",
                  "country_code": "NO",
                  "promo_note": "",
                  "most_popular": true
                  },
          
          
          
          ];
        setLocation(locations);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return <Location locations={location} />;
};

export default LocationContainer;
