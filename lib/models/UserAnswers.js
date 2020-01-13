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
    jobKeywords: {
        // do this
    },
    passions: {
        // type: Array,
        // minlength: 3,
        // maxlength: 3,
    },
    positionTitle: {
        type: String,
        required: true
    },
    values: {
        // do this too
    },
    companysCustomers: {
        // do this too
    },
    whyCustomerMatter: {
        type: String,
        required: true
    },
    companyMotivateMeTo: {
        type: String,
        required: true
    },
    opportunitiesTheEmployerProvides: {
        // do this too
    },
    fourTechLanguages: {
        // do it
    },
    pastExperience: {
        type: String,
        required: true
    },
    fourSkillsJobDescription: {
        // another array
    },
    mainResponsibilityAtOldJob: {
        type: String,
        required: true
    },
    threePastccomplishment: {
        // array again
    },
    excitedToDo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UserAnswers', schema);
