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
    email: {
        type: String,
        required: true
    },
    address: {
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
    hiringManager: {
        type: String,
        required: true
    },
    companyMission: {
        type: String,
        required: true
    },
    departmentName: {
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
    lifeExperienceRelatedValues: {
        type: String,
        required: true,
    },
    communityService: {
        type: String,
        required: true,
    },
    whyLikeCompany: {
        type: String,
        required: true,
    },
    companyCustomer: {
        type: String,
        required: true,
    },
    whyCustomerMatters: {
        type: String,
        required: true
    },
    somethingYouLove: {
        type: String,
        required: true
    },
    companyMotivatesMeTo: {
        type: String,
        required: true
    },
    opportunitiesTheEmployerProvides1: {
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
    pastAccomplishment1: {
        type: String,
        required: true
    },
    pastAccomplishment2: {
        type: String,
        required: true
    },
    greeting: {
        type: String,
        enum: ['Dear']
    },
    sincerely: {
        type: String,
        enum: ['Sincerely'],
        required: true
    }
});

module.exports = mongoose.model('UserAnswer', schema);
