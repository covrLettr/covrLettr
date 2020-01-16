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
            .create({
                header: req.body.header,
                intro: req.body.into,
                body1: req.body.body1,
                body2: req.body.body2,
                conclusion: req.body.conclusion,
                sincerely: req.body.sincerely
            })
            .then(res => res.send(res))
            .catch(next);
    });
