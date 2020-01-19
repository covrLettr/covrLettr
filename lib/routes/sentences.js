const { Router } = require('express');
const Sentence = require('../models/Sentence');

module.exports = Router()
    .post('/', (req, res, next) => {
        Sentence
            .create(req.body)
            .then(sentences => res.send(sentences))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Sentence
            .find()
            .then(sentences => res.send(sentences))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Sentence
            .findById(req.params.id)
            .then(sentence => res.send(sentence))
            .catch(next);
    })

    .patch('/:id', (req, res, next) => {
        Sentence
            .findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(sentence => res.send(sentence))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Sentence
            .findByIdAndDelete(req.params.id)
            .then(deletedSentence => res.send(deletedSentence))
            .catch(next);
    });
