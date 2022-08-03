const { Router } = require('express')
const FeedbackCategory =require('../../models/FeedbackCat')

const router = Router()



/*GET Method */
router.get('/', async (req, res) => {
    try {
        const feedbackList = await FeedbackCategory.find()
        if (!feedbackList) throw new Error('No Todo List found')
        res.status(200).json(feedbackList)
    } catch (error) {
        console.log("Errro happened")
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    //const newTodo = new Todo(req.body)
    const newFeedback=new Feedback(req.body)
    try {
        const feedback = await newFeedback.save()
        if (!feedback) throw new Error('Something went wrong saving the feedback')
        res.status(200).json(feedback)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router