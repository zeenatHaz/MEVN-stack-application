<template>
  <div id="app" class="container-fluid">
    <div class="row pt-5">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h2 class="text-uppercase text-center">daily news</h2>
      </div>
      <div class="col-md-4">
        <img
          height="50"
          class="pr-5 cursor-pointer"
          src="./assets/images/subscription.png"
        />
      </div>
    </div>
    <hr />
    <nav class="p-0">
      <div class="d-flex flex-row justify-content-around">
        <div class="p-2"><router-link to="/">Home</router-link></div>
        <div class="p-2">
          <router-link to="/business">Business</router-link>
        </div>
        <div class="p-2"><router-link to="/tech">Tech</router-link></div>
        <div class="p-2"><router-link to="/science">Science</router-link></div>
        <div class="p-2"><router-link to="/finance">Finance</router-link></div>
        <div class="p-2">
          <router-link to="/foodandhealth">Food & Health</router-link>
        </div>
        <div class="p-2"><router-link to="/sports">Sports</router-link></div>
        <div class="p-2"><router-link to="/contactus">Contact Us</router-link></div>
      </div>

      <b-nav> </b-nav>
    </nav>

    <router-view />
        <b-collapse id="collapse-1" class="mt-2" >  <Feedback
          :showFeedbackBox="showFeedbackBox"
          :feedbackCategories="feedbackCategories"
          :errorMessage="errorMessage"
          @saveUserFeedback="saveUserFeedback"
          :clearSelectedOptions="clearSelectedOptions"
        ></Feedback></b-collapse>
      
   
      <b-button
        v-b-toggle.collapse-1
        class="position-fixed feedback-button font-size-10"
        variant="primary"  @click="displayFeedbackBox"
        >   Feedback <b-icon-reply-fill /></b-button
      >

   
     
  </div>
</template>
<script>
import Feedback from "./components/common/Feedback.vue";
import Modal from "./components/common/Modal.vue"

var axios = require("axios").default;

export default {
  name: "App",
  components: {
    Feedback,
    Modal
  },
  data() {
    return {
      feedbackCategories: [],
      description: "",
      title: "",      
      showFeedbackBox: true,
      errorMessage:"",
      clearSelectedOptions:false
     
    };
  },
  methods: {
    saveUserFeedback(param) {
      //save this response to MongoDb
      const response = axios.post("api/feedback/", {
        userName: "default",
        description: param.desc ? param.desc : " ",
        comments: param.comments ? param.comments : "",
      }).catch(error=>{
        this.errorMessage="Error saving your feedback.Please try later."
      });

      if (response) {    
        this.showFeedbackBox = false;       
        this.$toast.success(`Thank you for your feedback`,{
        dismissible:true,
        position: "top",
       });
       // Close toast after 5000ms
        setTimeout(this.$toast.clear, 5000);
        this.clearSelection();
        param=null;

      }
    },
    clearSelection(){
       this.clearSelectedOptions-true;
    },
    showSuccessAlert() {
      this.dismissCountDown = this.dismissSecs;
      this.showDismissibleAlert = true;
    },
    displayFeedbackBox(){
      this.showFeedbackBox=true;
    },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
  },
  async mounted() {
  
    const feedbackCatResponse = await axios.get("api/feedbackCategories/").catch(error=>{
       this.errorMessage="Error getting feedback response due to " + error
    });
    this.feedbackCategories = feedbackCatResponse?(feedbackCatResponse.data?feedbackCatResponse.data:null):null;
    const feedbackResponse = await await axios.get("api/feedback/").catch(error=>{
       this.errorMessage="Error getting feedback response due to " + error
    });;
  },
};
</script>

<style>
@import "./assets/styles/main.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.feedback-button {
   right: -28px;
    bottom: 22%;
    /* transform-origin: 0% 0%; */
    transform: rotate(270deg) translateX(50%);


}
</style>
