
<template>
 
   <div class="row main-container text-white p-4" v-if="articles && articles[0]">
   <div class="col-md-6 ">
      <!--Top Story for the day-->
      <div class="text-left font-italic font-weight-normal" style="max-width:300rem">{{articles[0].summary}}</div>
        
        <b-link v-bind:href="articles[0].link"   target="_blank">details here...</b-link>
      </div>
      <div class="col-md-6"><img :src="articles[0].media" width="250    "/></div>
      </div>
   
      <div class="row pt-3 thumbnail-container">
      <div class="col-md-3 " v-for="article in articles" :key="article._id">
      <!--Top Stories for the day-->
      <Thumbnail :news="article" ></Thumbnail>
      </div>
      </div>
   
    
</template>
<script>
//import TopHeadLinesDataService from '@/services/TopHeadLinesDataService'
import BusinessDataService from '@/services/BusinessDataService';
import Thumbnail from './common/Thumbnail.vue';

export default{
    name: "TopNews",
    components: Thumbnail,
    data: function () {
        return { articles: Object };
    },
    created() {
        this.getBusinessNews();
    },
    methods: {
        getBusinessNews() {
            BusinessDataService.getAllBusinessNews().then(response => {
                this.articles = response.articles;
                console.log(this.articles);
            });
            // console.log(this.articles)
            console.log("this is the view com", this.articles);
        }
    },
    components: { Thumbnail }
}
</script>

<style scoped>
 .main-container{
    background-color: black;

 }
 .thumbnail-container{
    background-color: bisque;
 }
</style>
