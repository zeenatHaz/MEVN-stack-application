const { Schema, model } = require('mongoose')

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    comments:{
        type:String,
        required:false
    }
})

const Todo = model('todo', TodoSchema)

module.exports = Todo