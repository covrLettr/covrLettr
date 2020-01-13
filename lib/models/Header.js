const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {

    },
    pronoun: {

    },
    email: {

    },
    phone: {

    },
    address: {

    },
    date: {
        type: Date,
        //format after receiving date
        required: true
    },
    companyName: {

    },
    companyAddress: {

    },
    greeting: {
        type: String,
        enum: ['Dear']
    },
    hiringManager: {
        
    }
});

module.exports = mongoose.model('Header', schema);
