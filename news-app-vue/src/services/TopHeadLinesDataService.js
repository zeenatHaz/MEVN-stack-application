import commonService from "./common/commonService";
class TopHeadLinesDataService {
    getAllTopHeadLines() {
      return commonService.getData().then(response=>{
     
        return response;
      })
    
  
  }


}
export default new TopHeadLinesDataService();