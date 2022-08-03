<template>
  <div class="container-fluid" >   
  
    <TopNews></TopNews>
  
</div>
  

</template> 

<script>

import TopNews from '@/components/TopNews.vue'

var axios = require("axios").default;

export default {
  name: 'HomeView',
  components : {
    TopNews,
 
},  data() {
    return {
      todos: [],
      feedbackCategories:[],
      description: "",
      title: "",
      showDismissibleAlert: false,
       dismissSecs: 10,
       dismissCountDown:0
    };
  },
  methods:{
   
  },
 
}
</script>
<style >
.home-min-height{
  min-height:30vh;
}

</style>