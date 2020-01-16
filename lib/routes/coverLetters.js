const { Router } = require('express');
const CoverLetter = require('../models/CoverLetter');

module.exports = Router()
    .get('/:id', (req, res, next) => {
        CoverLetter
            .findById(req.params.id)
            .then(coverLetter => res.json(coverLetter))
            .catch(next);
    })
    .post('/', (req, res, next) => {
        CoverLetter
            .create(req.body)
            .then(coverLetter => res.send(coverLetter))
            .catch(next);
    });
