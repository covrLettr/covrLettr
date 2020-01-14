const { Router } = require('express');
const UserAnswer = require('../models/UserAnswer');

module.exports = Router()
    .post('/', (req, res, next) => {
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
    });
