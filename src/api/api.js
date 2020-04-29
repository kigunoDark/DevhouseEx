  
import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://api.dev.cakeiteasy.no/api/store/",
})


export const mainApi = {
  getLocations: () => {
     return instance.get("cities/?country_code=no&most_popular=true")
     .then(locations => locations.data)
     .catch(err => err)
  },
  getBakeries: () => {
    return instance.get("bakeries/?country_code=no")
    .then(response => response.data)
    .catch(err => err);
  },
  getBakery: (name) => {
    return axios.get(`http://api.dev.cakeiteasy.no/api/store/bakeries/${name}/?country=NO`)
    .then(response => response.data)
    .catch(err =>  err)
  }  
}

