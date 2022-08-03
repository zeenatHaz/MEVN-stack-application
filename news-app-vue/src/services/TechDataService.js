import http from "../http-common";
var axios = require("axios").default;
var baseUrl='https://api.newscatcherapi.com';
class TechDataService {
    getAllTechNews() {
   
    var options = {
      method: 'GET',
      url: baseUrl+'/v2/latest_headlines',
      params: {countries:'US', topic:'tech',page:'1',page_size:'5'},
      headers: {
        'x-api-key': 'oxVbs4JG7h5m6SsYoBV8IClLkXVUMWepJpA3Qlaanaw'
      }
    };
    
   return   axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      console.error(error);
    });
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}
export default new TechDataService();