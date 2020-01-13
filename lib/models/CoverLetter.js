const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    header: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Header'
    },
    intro: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Intro'
    },
    body1: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Body1'
    },
    body2: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Body2'
    },
    conclusion: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Conclusion'
    },
    sincerely: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sincerely'
    }
});

module.exports = mongoose.model('CoverLetter', schema);