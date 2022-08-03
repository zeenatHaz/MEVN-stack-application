

import http from "../http-common";
var axios = require("axios").default;
var baseUrl='https://api.newscatcherapi.com';
class FinanceDataService {
   getAllFinanceNews() {
   
    var options = {
      method: 'GET',
      url: baseUrl+'/v2/latest_headlines',
      params: {countries:'US', topic:'finance',page:'1',page_size:'10'},
      headers: {
        'x-api-key': 'oxVbs4JG7h5m6SsYoBV8IClLkXVUMWepJpA3Qlaanaw'
      }
    };
    return axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      return response.data;
      
    })
    .catch((error) => {
      console.log(error);
    });
  
  }
  
  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}
export default new FinanceDataService();