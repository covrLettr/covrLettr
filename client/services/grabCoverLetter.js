const request = require('superagent');

const REQUEST_URL = 'http://localhost:7890';

const grabCoverLetter = () => {
    return request
        .get(`${REQUEST_URL}/api/v1/coverLetters`)
        .then(res => res.body);
};

module.exports = { grabCoverLetter };
