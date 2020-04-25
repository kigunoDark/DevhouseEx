import React, {useState, useEffect } from  "react";
import Schedule from "./Schedule";
import * as axios from "axios";

const ScheduleContainer = () => {
  const [ schedule, setSchedule] = useState([]);
  const [ name, setName] = useState('');
  useEffect(() => {
    (async function() {
      let map = new Map(),
          schedule = [],
          prevDayName ='',
          list = await axios.get("http://api.dev.cakeiteasy.no/api/store/bakeries/Che-Bakery/?country=NO"); 
          list = list.data;  

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
      
      setSchedule(schedule);
      setName(list.name)
    })()
  }, []) 
 
  return  <Schedule schedule={schedule} name={name} />
}

export default ScheduleContainer;