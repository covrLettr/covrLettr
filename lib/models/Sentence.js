const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    paragraph: {
        type: String,
        required: true,
        enum: ['intro', 'body1', 'body2', 'conclusion']
    },
    position: {
        type: Number,
        required: true,
        max: 3
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Sentence', schema);
