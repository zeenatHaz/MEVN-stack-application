<template>
  <b-card
   
   
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  > 
 <img :src="news.media" v-if="news.media" style="width: -webkit-fill-available;"  />
    <b-card-text>
      {{news.title}}
    </b-card-text>

    <b-button v-bind:href="news.link" variant="primary"  target="_blank">continue reading </b-button>
  </b-card>

 
</template>
<script>


export default{
  name: "Thumbnail",
  props: {
    cardTitle: String,
    news:{},
    view:null 
  }

,methods:{
 
},created(){
 
}
}
</script>
<style scoped>
.cardContainer{
  background-color: grey;
   text-align: left !important;;
   border-radius: 10px;
}

.padding-left{
  padding-left:1rem !important;
}
</style>