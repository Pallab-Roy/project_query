const mongoose = require('mongoose');

const qaSchema = new mongoose.Schema({
    userEmail: {
        type: String,
    },
    question: {
        type: String,
    },
    answers: [
        {
            userEmail: {
                type: String,
                required: true
            },
            answer: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ]
}, { timestamps: true })

const QuestionAnswers = mongoose.model('QANSWER', qaSchema);
module.exports = QuestionAnswers;