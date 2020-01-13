const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    paragraph: {
        type: String,
        required: true,
        enum: ['header', 'intro', 'body1', 'body2', 'conclusion', 'sincerely']
    },
    position: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Sentence', schema);
