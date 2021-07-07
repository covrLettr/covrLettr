const mongoose = require('mongoose');
const sentimentScorer = require('../utils/sentimentScorer');
const { mashIt, header, sincerely } = require('../helpers/mash-it');

const schema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userAnswerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'UserAnswer'
    },
    header: {
        type: Array,
        required: true
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
        type: Array,
        required: true
    }
});

schema.statics.forgeMultipleAndGenerate = function(userAnswerId, num){
    return Promise.all([...Array(num)].map(() => this.forgeCL(userAnswerId)))
        .then(coverLetters => Promise.all(coverLetters.map(coverLetter => coverLetter.generate())));
};

schema.statics.forgeWithGoodSentiment = function(userAnswerId, num = 10){
    return this.forgeMultipleAndGenerate(userAnswerId, num)
        .then(allNewCoverLetters => {
            const { letter } = sentimentScorer(allNewCoverLetters);
            return letter;
        });
};

schema.statics.forgeCL = function(userAnswerId){
    const Sentence = this.model('Sentence');
    const UserAnswer = this.model('UserAnswer');
    return Promise.all([
        UserAnswer.findById(userAnswerId),
        Sentence.getRandom('intro', 1),
        Sentence.getRandom('body1', 4),
        Sentence.getRandom('body2', 4),
        Sentence.getRandom('conclusion', 1),
    ])
        .then(([userAnswer, intro, body1, body2, conclusion]) => {
            return this.create({
                userId: userAnswer.userId,
                userAnswerId,
                header,
                intro: intro.map(sentence => sentence._id),
                body1: body1.map(sentence => sentence._id),
                body2: body2.map(sentence => sentence._id),
                conclusion: conclusion.map(sentence => sentence._id),
                sincerely
            });
        });
};

schema.methods.generate = async function(){
    return this.model('CoverLetter')
        .findById(this._id)
        .populate('userAnswerId')
        .populate('intro', { text: true })
        .populate('body1', { text: true })
        .populate('body2', { text: true })
        .populate('conclusion', { text: true })
        .then(filledModel => {
            const populatedHeader = mashIt(filledModel.header, filledModel.userAnswerId).join('');
            const populatedIntro = mashIt(filledModel.intro, filledModel.userAnswerId).join(' ');
            const populatedBody1 = mashIt(filledModel.body1, filledModel.userAnswerId).join(' ');
            const populatedBody2 = mashIt(filledModel.body2, filledModel.userAnswerId).join(' ');
            const populatedConclusion = mashIt(filledModel.conclusion, filledModel.userAnswerId).join(' ');
            const populatedSincerely = mashIt(filledModel.sincerely, filledModel.userAnswerId).join('');
            return [populatedHeader, populatedIntro, populatedBody1, populatedBody2, populatedConclusion, populatedSincerely].join('\n\n');
        });
};

module.exports = mongoose.model('CoverLetter', schema);
