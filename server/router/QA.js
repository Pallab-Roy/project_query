const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
// for MongoDB database connection
require('../db/mdbConn');
const QuestionAnswers = require('../model/qaSchema');
// const User = require('../model/userSchema');

router.get('/queans', async (req, res) => {
    const qa = await QuestionAnswers.find();
    res.send(qa)
})

router.post('/question', authenticate, async (req, res) => {
    const { question } = req.body;
    if (!question) {
        return res.status(422).json({ error: "Filled the filds properly" });
    }
    try {
        const addQuestion = new QuestionAnswers({ userEmail: req.rootUser.email, question: question });
        await addQuestion.save();
        res.status(200).json({ message: "Question added successfully." });
    } catch (error) {
        console.log(error)
        res.status(421).json({ error: "Dataabase Error!" });
    }
})

router.post('/answer', authenticate, async (req, res) => {
    const { answer } = req.body;
    const questionID = "60d1b868e7ef0f773d9158d3"
    if (!answer) {
        return res.status(422).json({ error: "Filled the filds properly" });
    }
    try {
        const newAnswer = { userEmail: req.rootUser.email, answer }
        let question = await QuestionAnswers.findById(questionID);
        question.answers.push(newAnswer);
        await question.save();
        res.status(200).json({ message: "Answers added successfully." });
    } catch (error) {
        console.log(error)
        res.status(421).json({ error: "Dataabase Error!" });
    }
})

module.exports = router;