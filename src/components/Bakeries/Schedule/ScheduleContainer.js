import React, {useState, useEffect} from  "react";
import { useParams } from "react-router";
import Schedule from "./Schedule";
import { mainApi } from "../../../api/api.js";

const ScheduleContainer = (props) => {
  let param =  useParams();
  const [ schedule, setSchedule] = useState([]);
  const [ name, setName] = useState('');
  const [err, setError] = useState(false);

  
  useEffect(() => {
    (async function() {
      let map = new Map(),
          schedule = [],
          prevDayName ='',
          list = await mainApi.getBakery(param.name);
          
      if(list.message) {
        setError(true);
      } else {

      let upperFirst = (day) => day.split('')[0].toLocaleUpperCase() + day.slice(1);

      for(let day in list.schedule) {
        if(prevDayName === '') prevDayName = day;
        if(list.schedule[day].day_off === false) {
          if(day === 'monday') map[prevDayName] = day;
          if(JSON.stringify(list.schedule[day]) === JSON.stringify(list.schedule[prevDayName])) {
            map[prevDayName] = day;
          } else {
            map[day] = day
            prevDayName = day;
          }            
        }  else if(list.schedule[day].day_off === true) {
          map[day] = "close";
          prevDayName = '';
        }
      };

      for(let day in map) {
        if(map[day] === day) {
          if( list.schedule[day].days_before_order > 1) {
            schedule.push(`${upperFirst(day)}: Before ${list.schedule[day].order_before}, ${list.schedule[day].days_before_order} days before`);
          } else {
            schedule.push(`${upperFirst(day)}: Before ${list.schedule[day].order_before}, ${list.schedule[day].days_before_order} day before`);
          };
        } else if(map[day] !== day && map[day] !== 'close') {
          if( list.schedule[day].days_before_order > 1) {
            schedule.push(`For ${upperFirst(day)} - ${upperFirst(map[day])}: Before ${list.schedule[day].order_before}, ${list.schedule[day].days_before_order} days before`);
          } else {
            schedule.push(`${upperFirst(day)} - ${upperFirst(map[day])}: Before ${list.schedule[day].order_before}, ${list.schedule[day].days_before_order} day before`);
          };
        } else {
          schedule.push(`${upperFirst(day)}: closed`);
        };
      }; 
      setError(false);
      setSchedule(schedule);
      setName(list.name)
      }
    })();
  
  }, [param.name]);
 
  return  <Schedule schedule={schedule} name={name} err={err} />
}

export default ScheduleContainer;