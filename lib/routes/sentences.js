const { Router } = require('express');
const Sentence = require('../models/Sentence');
const mashIt = require('../middleware/mash-it');

module.exports = Router()

    .get('/', mashIt, (req, res, next) => {
        Sentence
            .find()
            .then(sentences => res.send(sentences))
            .catch(next);
    });
