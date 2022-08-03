<template>
    <div class="feedback-container w-25" v-if="showFeedbackBox">
    <b-list-group v-if="feedbackCategories " class="feedback-list-items">
  <b-list-group-item  class="cursor-pointer text-left " v-for="category in feedbackCategories"
    @click="checkFeedbackCategory(category)">
   {{category.desc}}</b-list-group-item>

</b-list-group>
 <code class="p-2" v-if="showCommentError">Please let us what went wrong </code>
   <div class="p-2" v-if="showComments"> <textarea class="form-control" @input="hideCommentError" v-model="comments" id="exampleFormControlTextarea1" rows="3" placeholder="Please explain what went wrong"></textarea></div>
  <div >   
  </div>
  <div class="text-center" v-if="showComments">  <b-button @click="addComments()">post</b-button></div>
   <div  v-if="errorMessage" >
      <Error :data="errorMessage"></Error>
      </div>
    </div>
    
    
</template>
<script>
   import Error from './Error.vue'

export default{
    name:'feedback',
    
    data(){
      return {
        comments:'',
        showComments:false,
        showCommentError:false,
        categorySelected:{},
       
      }
    },
    props:{
        feedbackCategories:{},
        showFeedbackBox:false,
         errorMessage:{}
    },
    methods:{
        hideCommentError(){
         this.showCommentError=false;
        },
        addComments(){
            if(this.comments && this.comments.length>0){
                //call save with comments
                 this.categorySelected.comments=this.comments;
                this.saveFeedback();
            }else{
                this.showCommentError=true;
            }
        },

        checkFeedbackCategory(category){
            this.categorySelected=category;
            this.showCommentError=false;
            this.categorySelected.comments=this.comments;
            if(category && category.type==4){
                this.showComments=true;              
               
            }else{
                this.showComments=false;
                this.saveFeedback();
            }
        },
        saveFeedback(){
            this.$emit("saveUserFeedback", this.categorySelected);
          // console.log(category)
        },
       
    },
    components:{
     Error
    }

}
</script>


<style scoped>
.feedback-container{
    background-color:#ded5d5;
    position:fixed;
    right:12px;
    bottom: 0;
    min-height:130px;
    width: min-content;
    text-align: left;
    border-radius:10px;
       
}
.feedback-list-items :hover{
    background-color: grey;
}
.b-form-input{
  height:100px !important
}
</style>
