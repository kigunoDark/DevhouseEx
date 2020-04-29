import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Schedule from "./Schedule";
import { mainApi } from "../../../api/api.js";

const ScheduleContainer = (props) => {
  let param = useParams();
  const [schedule, setSchedule] = useState([]);
  const [name, setName] = useState("");
  const [err, setError] = useState(false);

  useEffect(() => {
    (async function () {
      let map = new Map(),
        schedule = [],
        prevDayName = "",
        list = await mainApi.getBakery(param.name);

      if (list.message) {
        setError(true);
      } else {

        let upperFirst = (day) => day.split("")[0].toLocaleUpperCase() + day.slice(1);

        let stringGen = (fday, lday, time, days_before) => {
          let newString = '';
          days_before = days_before > 1 ? `: Before ${time}, days before` : `: Before ${time}, day before `;
          if(fday === lday) {
            return newString += upperFirst(lday) + days_before;
          } else if(fday !== lday && fday !== "close") {
            return newString += `For ${upperFirst(lday)} - ${upperFirst(fday)}` + days_before;
          } else {
            return newString += upperFirst(lday) + ": Closed";
          }
        }


        for (let day in list.schedule) {
          if (prevDayName === "") prevDayName = day;
          if (list.schedule[day].day_off === false) {
            if (day === "monday") map[prevDayName] = day;
            if (
              JSON.stringify(list.schedule[day]) ===
              JSON.stringify(list.schedule[prevDayName])
            ) {
              map[prevDayName] = day;
            } else {
              map[day] = day;
              prevDayName = day;
            }
          } else if (list.schedule[day].day_off === true) {
            map[day] = "close";
            prevDayName = "";
          }
        }

        for (let day in map) {

          let days_before = list.schedule[day].days_before_order;
          let order_before = list.schedule[day].order_before;

          let time = ((order_before / 60) - 2).toString() + ':00';

          schedule.push(stringGen(map[day], day, time, days_before));


          // if (map[day] === day) {
          //   if (days_before > 1) {
          //     schedule.push(
          //       `${upperFirst(day)}: Before ${
          //         time
          //       }, ${days_before} days before`
          //     );
          //   } else {
          //     schedule.push(
          //       `${upperFirst(day)}: Before ${
          //         time
          //       }, ${days_before} day before`
          //     );
          //   }
          // } else if (map[day] !== day && map[day] !== "close") {
          //   if (days_before > 1) {
          //     schedule.push(
          //       `For ${upperFirst(day)} - ${upperFirst(map[day])}: Before ${
          //         time
          //       }, ${days_before} days before`
          //     );
          //   } else {
          //     schedule.push(
          //       `${upperFirst(day)} - ${upperFirst(map[day])}: Before ${
          //         time
          //       }, ${days_before} day before`
          //     );
          //   }
          // } else {
          //   schedule.push(`${upperFirst(day)}: closed`);
          // }
        }
        setError(false);
        setSchedule(schedule);
        setName(list.name);
      }
    })();
  }, [param.name]);

  return <Schedule schedule={schedule} name={name} err={err} />;
};

export default ScheduleContainer;
