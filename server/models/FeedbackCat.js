const {Schema,model} =require('mongoose')

var FeedbackCatSchema=new Schema({
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

const feedbackCat = model('FeedbackCategory', FeedbackCatSchema)

module.exports = feedbackCat