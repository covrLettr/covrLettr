const { Router } = require('express');
const User = require('../models/User');

module.exports = Router()
    .get('/:id', (req, res, next) => {
        User
            .findById(req.params.id)
            .populate('coverLetters')
            .then(user => user.coverLetters.map(coverLetter => coverLetter.generate()))
            .then(promises => Promise.all(promises))
            .then(coverLetters => res.send(coverLetters.toString()))
            .catch(next);
    });
