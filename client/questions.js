var inquirer = require('inquirer');
const validator = require('email-validator');
const request = require('superagent');
const { attemptLogin, attemptSignUp } = require('./services/auth');



const signinInput = [
    {
        type: 'input',
        name: 'email',
        message: ('Please enter your email'),
        validate: function validEmail(email) {
            if(!validator.validate(email)) {
                return 'Please enter a valid email';
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'password',
        name: 'password',
        message: ('Please enter a password'),
        validate: function validPass(pass) {
            if(pass.length !== 0) {
                return true;
            }
            else {
                return 'Please enter a valid password';
            }
        }
    }
];

const signupInput = [
    {
        type: 'input',
        name: 'email',
        message: ('Please enter your email'),
        validate: function validEmail(email) {
            if(!validator.validate(email)) {
                return 'Please enter a valid email';
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'password',
        name: 'password',
        message: ('Please enter a password'),
        validate: function validPass(pass) {
            if(pass.length !== 0) {
                return true;
            }
            else {
                return 'Please enter a valid password';
            }
        }
    }
];

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: ('What is your name?')
//         },
//         {
//             type: 'list',
//             name: 'pronoun',
//             message: ('What pronoun do you go by?'),
//             choices: ['they/them', 'she/her', 'he/him']
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: ('What is your email?')
//         },
//         {
//             type: 'input',
//             name: 'phone',
//             message: ('What is your phone number?')
//         },
//         {
//             type: 'input',
//             name: 'address',
//             message: ('What is your address?')
//         },
//         {
//             type: 'input',
//             name: 'companyName',
//             message: ('What is the company name you are applying for?')
//         },
//     ])
//     .then(answers => {
//         console.log(answers);
//     });

const mainQuestions = [
    {
        type: 'input',
        name: 'name',
        message: ('What is your name?')
    },
    {
        type: 'list',
        name: 'pronoun',
        message: ('What pronoun do you go by?'),
        choices: ['they/them', 'she/her', 'he/him']
    },
    {
        type: 'input',
        name: 'email',
        message: ('What is your email?')
    },
    {
        type: 'input',
        name: 'phone',
        message: ('What is your phone number?')
    },
    {
        type: 'input',
        name: 'address',
        message: ('What is your address?')
    },
    {
        type: 'input',
        name: 'companyName',
        message: ('What is the company name you are applying for?')
    }];

const signInPrompt = () =>
    inquirer.prompt(signinInput)
        .then(user => {
            attemptLogin(user)
                .then(res => console.log(res));
        })
        .then(() => inquirer.prompt(mainQuestions))
        .catch(() => {
            console.log('ERROR: Invalid email or password');
            signInPrompt();
        });

const signUpPrompt = () =>
    inquirer.prompt(signupInput)
        .then(user => {
            attemptSignUp(user)
                .then(res => console.log(res))
                .then(() => inquirer.prompt(mainQuestions))
                .then((answers) => {
                    return answers, user;
                })
                .catch();
              
        });

module.exports = { signInPrompt, signUpPrompt };
