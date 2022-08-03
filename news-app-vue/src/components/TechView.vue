
<template>
    <ul class="list-group px-5" v-if="articles">
 <li class="list-group-item p-2 text-left mb-3 font-size-14" v-for="article in articles" :key="article._id">
 <div class="row">
  <div class="col-8 text-left align-self-center">{{article.summary}}</div>
   <div class="col-4"> <img :src="article.media"  class="w-50 float-right"  /></div>
 </div>


 </li>

</ul>
 <div v-else>No Data Found</div>
</template>
<script>
import BusinessDataService from '@/services/BusinessDataService';
import Thumbnail from './common/Thumbnail.vue';

export default {
   name:'TechView',   
   data: function() {
  return {
  articles: Object,
      loading: false, 
    //  businessNews: data
  };
},
   created(){
     var topic= this.$route.name; 
     console.log("id is",topic);
     this.getBusinessNews(topic);
     console.log(this.businessNews);

   },
   methods:{
     getBusinessNews(){
        BusinessDataService.getAllBusinessNews().then(response=>{
        console.log(response);
        this.articles=response.articles;
         console.log( this.articles);
      })
     // console.log(this.articles)
      
      console.log("this is the view com",this.articles)
     }
   }
}
</script>
<style scoped>
.list-group-item{
  
  text-align:left;
   border: 1px solid ;
  padding: 10px;
  box-shadow: 1px 2px #BCBCBC;
  border-radius:5px;
}
</style>
