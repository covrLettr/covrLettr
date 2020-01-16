const { Router } = require('express');
const CoverLetter = require('../models/CoverLetter');

module.exports = Router()
    .post('/', (req, res, next) => {
        CoverLetter
            .forgeCL(req.body.userAnswerId)
            .then(coverLetter => coverLetter.generate())
            .then(fullCoverLetter => {
                console.log(fullCoverLetter);
                res.send(fullCoverLetter);
            })
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        CoverLetter
            .findById(req.params.id)
            .then(coverLetter => res.json(coverLetter))
            .catch(next);
    });
