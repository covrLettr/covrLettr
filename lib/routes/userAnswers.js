const { Router } = require('express');
const UserAnswers = require('../models/UserAnswers');

module.exports = Router()
    .post('/', (req, res, next) => {
        UserAnswers
            .create(req.body)
            .then(answers => res.send(answers))
            .catch(next);
    });
