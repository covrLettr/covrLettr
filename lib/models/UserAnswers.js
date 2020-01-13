const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pronoun: {
        type: String,
        required: true,
        enum: ['they/them', 'she/her', 'he/him']
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
        required: true,
        enum: ['Dear']
    },
    hiringManager: {
        type: String,
        required: true
    },
    jobTopic: {
        type: String,
        required: true
    },
    companyMission: {
        type: String,
        required: true
    },
    jobKeyword1: {
        type: String,
        required: true,
    },
    jobKeyword2: {
        type: String,
        required: true,
    },
    jobKeyword3: {
        type: String,
        required: true,
    },
    passion1: {
        type: String,
        required: true,
    },
    passion2: {
        type: String,
        required: true,
    },
    passion3: {
        type: String,
        required: true,
    },
    positionTitle: {
        type: String,
        required: true
    },
    value1: {
        type: String,
        required: true,
    },
    value2: {
        type: String,
        required: true,
    },
    value3: {
        type: String,
        required: true,
    },
    companysCustomer: {
        type: String,
        required: true,
    },
    whyCustomerMatter: {
        type: String,
        required: true
    },
    companyMotivateMeTo: {
        type: String,
        required: true
    },
    opportunitiesTheEmployerProvides1: {
        type: String,
        required: true
    },
    opportunitiesTheEmployerProvides2: {
        type: String,
        required: true
    },
    techLanguage1: {
        type: String,
        required: true,
    },
    techLanguage2: {
        type: String,
        required: true,
    },
    techLanguage3: {
        type: String,
        required: true,
    },
    techLanguage4: {
        type: String,
        required: true,
    },
    pastExperience: {
        type: String,
        required: true
    },
    skillJobDescription1: {
        type: String,
        required: true
    },
    skillJobDescription2: {
        type: String,
        required: true
    },
    skillJobDescription3: {
        type: String,
        required: true
    },
    mainResponsibilityAtOldJob: {
        type: String,
        required: true
    },
    pastAccomplishment1: {
        type: String,
        required: true
    },
    pastAccomplishment2: {
        type: String,
        required: true
    },
    excitedToDo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UserAnswers', schema);
