const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const TodoListRoutes = require('./routes/api/todoList')
const FeedBackRoutes=require('./routes/api/Feedback')
const FeedbackCategoryRoutes=require('./routes/api/FeedbackCat')
const path = require('path')
const PORT = 3000
require('dotenv').config();

app.use(cors())
app.use(bodyParser.json())

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB  Connected...'))
    .catch((err) => console.log(err))

    app.get('/', (req, res) => {
        res.send('Hello World')
    })
      
    app.get('/test', (req, res) => {
        res.send('This is the test Api')
    })
    
app.use('/api/todoList', TodoListRoutes)
app.use('/api/feedback', FeedBackRoutes)
//app.use('api/postFeedback',FeedBackRoutes)
app.use('/api/feedbackCategories',FeedbackCategoryRoutes);
app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))
