const { Router } = require('express');
const sentences = require('../helpers/sentenceSeed');
const makeCoverLetter = require('../middleware/mash-it');
const UserAnswer = require('../models/UserAnswer');
const CoverLetter = require('../models/CoverLetter');
 
module.exports = Router()
    .post('/', (req, res, next) => {
        makeCoverLetter 
            .create(req.body)
            .then(coverLetter => res.send(coverLetter))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const userAnswer = new Promise(UserAnswer.findById(req.params.id))
            .then(makeCoverLetter(sentences, userAnswer))
            .then(coverLetter => res.send(coverLetter))
            .catch(next);
    });
