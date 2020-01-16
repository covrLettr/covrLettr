const mongoose = require('mongoose');
const { mashIt, header, sincerely } = require('../helpers/mash-it');

const schema = new mongoose.Schema({
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

schema.statics.forgeCL = function(userAnswerId){
    const Sentence = this.model('Sentence');
    return Promise.all([
        Sentence.getRandom('intro', 1),
        Sentence.getRandom('body1', 4),
        Sentence.getRandom('body2', 4),
        Sentence.getRandom('conclusion', 1),
    ])
        .then(([intro, body1, body2, conclusion]) => {
            console.log(body1);
            
            return this.create({
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

schema.methods.generate = function(){
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
