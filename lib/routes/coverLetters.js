const { Router } = require('express');
const CoverLetter = require('../models/CoverLetter');

module.exports = Router()
    .post('/', (req, res, next) => {
        CoverLetter
            .forgeWithGoodSentiment(req.body.userAnswerId)
            .then(fullCoverLetter => res.send(fullCoverLetter))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        CoverLetter
            .find()
            .then(coverLetters => Promise.all(coverLetters.map(coverLetter => coverLetter.generate())))
            .then(coverLetters => res.send(coverLetters))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        CoverLetter
            .findById(req.params.id)
            .then(coverLetter1 => coverLetter1.generate())
            .then(coverLetter => res.send(coverLetter))
            .catch(next);
    });
