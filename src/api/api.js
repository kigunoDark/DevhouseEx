  
import * as axios from 'axios';
// http://api.dev.cakeiteasy.no/api/store/images/4787/?size=small_url&compress_type=webp

const instance = axios.create({
  baseURL: "http://api.dev.cakeiteasy.no/api/store/",
})


export const mainApi = {
  getLocations: () => {
     return instance.get("http://api.dev.cakeiteasy.no/api/store/cities/?country_code=no&most_popular=true")
     .then(locations => locations.data)
  },
  getBakeries: () => {
    return instance.get("http://api.dev.cakeiteasy.no/api/store/bakeries/?country_code=no")
    .then(response => response.data);
  }}
