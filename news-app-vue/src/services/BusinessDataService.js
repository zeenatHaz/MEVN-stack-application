

import commonService  from "./common/commonService";
class BusinessDataService {
  getAllBusinessNews(){
    return commonService.getData().then(response=>{
     
      return response.data;
    })
  }
 
}
export default new BusinessDataService();