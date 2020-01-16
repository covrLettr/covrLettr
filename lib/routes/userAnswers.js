const { Router } = require('express');
const UserAnswer = require('../models/UserAnswer');

module.exports = Router()
    .post('/', (req, res, next) => {
        console.log('REQ RECIEVED', req.body);
        UserAnswer
            .create(req.body)
            .then(answers => res.send(answers))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        UserAnswer
            .find()
            .then(answers => res.send(answers))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        UserAnswer
            .findById(req.params.id)
            .then(answer => res.send(answer))
            .catch(next);
    })

    .patch('/:id', (req, res, next) => {
        UserAnswer
            .findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(answer => res.send(answer))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        UserAnswer
            .findByIdAndDelete(req.params.id)
            .then(deletedAnswer => res.send(deletedAnswer))
            .catch(next);
    });
