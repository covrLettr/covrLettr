const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    header: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Header'
    },
    intro: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sentence'
    }],
    body1: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sentence'
    }],
    body2: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sentence'
    }],
    conclusion: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sentence'
    }],
    sincerely: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sincerely'
    }
});

module.exports = mongoose.model('CoverLetter', schema);