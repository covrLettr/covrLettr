const request = require('superagent');

const REQUEST_URL = 'http://localhost:7890';

const attemptSignUp = (loginData) => {
    return request
        .post(`${REQUEST_URL}/api/v1/auth/signup`)
        .send(loginData);
    // .then(() => inquirer.prompt(mainQuestions))
    // .then((answers) => {
    //     return answers, user;
    // })
    // .catch();
};

const attemptLogin = (loginData) => {
    return request
        .post(`${REQUEST_URL}/api/v1/auth/login`)
        .send(loginData);
    // .then(() => inquirer.prompt(mainQuestions))
    // .then((answers) => {
    //     return answers, user;
    // });

};

module.exports = { attemptLogin, attemptSignUp };
