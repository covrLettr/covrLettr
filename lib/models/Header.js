const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pronoun: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    companyAddress: {
        type: String,
        required: true
    },
    greeting: {
        type: String,
        enum: ['Dear', 'Attention:', 'Hello']
    },
    hiringManager: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('Header', schema);
