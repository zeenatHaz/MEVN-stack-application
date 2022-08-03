const {Schema,model} =require('mongoose')

var FeedbackSchema=new Schema({
     userName:{
        type:String,
        required:true,

     },
     description:{
        type:String,
        required:true
     },
     comments:{
        type:String,
        required:false
     }
})

const Feedback = model('feedback', FeedbackSchema)

module.exports = Feedback