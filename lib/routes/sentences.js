const { Router } = require('express');
const Sentence = require('../models/Sentence');
const mashIt = require('../middleware/mash-it');

module.exports = Router()

    .get('/', mashIt, (req, res, next) => {
        Promise.All([
            Sentence
                .find(),
            UserAnswer
                .findById()
        ])
            .then([sentences, userAnswer])
            .then(staticMethod(sentences, userAnswer))
            })
            .then(fullSentences = res.send(fullSentences))

            .then(sentences => res.send(sentences))
            .catch(next);
    });
