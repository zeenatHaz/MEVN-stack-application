const {Schema,model} =require('mongoose')

var FeedbackSchema=new Schema({
    desc:{
        type:String,
        required:true
     }
     ,
     categoryId:{
        type:Number,
        required:true,

     }
    
})

const FeedbackCategory = model('feedbackCategorys', FeedbackSchema)

module.exports = FeedbackCategory