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


const mainQuestions = [
    {
        type: 'input',
        name: 'name',
        message: ('What is your name?')
    },
    {
        type: 'list',
        name: 'pronoun',
        message: ('What are your pronouns?'),
        choices: ['they/them', 'she/her', 'he/him']
    },
    {
        type: 'input',
        name: 'email',
        message: ('What is your email?')
    },
    {
        type: 'input',
        name: 'companyName',
        message: ('What is the company\'s name?')
    },
    {
        type: 'input',
        name: 'companyAddress',
        message: ('What is the company\'s address?')
    },
    {
        type: 'input',
        name: 'companyMission',
        message: ('What is the company\'s mission statement?')
    },
    {
        type: 'input',
        name: 'departmentName',
        message: ('What department are you applying for?')
    },
    {
        type: 'input',
        name: 'jobKeyWord1',
        message: ('What is one key word from the job description?')
    },
    {
        type: 'input',
        name: 'jobKeyWord2',
        message: ('What is another key word from the job description?')
    },
    {
        type: 'input',
        name: 'jobKeyWord3',
        message: ('What is a third key word from the job description?')
    },
    {
        type: 'input',
        name: 'positionTitle',
        message: ('What is the position you are applying for?')
    },
    {
        type: 'input',
        name: 'passion1',
        message: ('What is one of your passions?')
    },
    {
        type: 'input',
        name: 'passion2',
        message: ('What is another passion?')
    },
    {
        type: 'input',
        name: 'passion3',
        message: ('Name a third passion')
    },
    {
        type: 'input',
        name: 'skillJobDescription1',
        message: ('What is a skill you have that the job requires?')
    },
    {
        type: 'input',
        name: 'skillJobDescription2',
        message: ('What is another skill you have that the job requires?')
    },
    {
        type: 'input',
        name: 'skillJobDescription3',
        message: ('What is a third skill you have that the job requires?')
    },
    {
        type: 'input',
        name: 'whyLikeCompany',
        message: ('Why do you like this company?')
    },
    {
        type: 'input',
        name: 'somethingYouLove',
        message: ('What is something you love?')
    },
    {
        type: 'input',
        name: 'value1',
        message: ('List one of your values.')
    },
    {
        type: 'input',
        name: 'value2',
        message: ('List another one of your values.')
    },
    {
        type: 'input',
        name: 'value3',
        message: ('Name a third value.')
    },
    {
        type: 'input',
        name: 'lifeExperienceRelatedValues',
        message: ('Tell me about a time in your life when you demonstrated one of those values?')
    },
    {
        type: 'input',
        name: 'communityService',
        message: ('Is the organization a part of any community service? If so, what?')
    },
    {
        type: 'input',
        name: 'companyCustomer',
        message: ('Who are the target customers of this company?')
    },
    {
        type: 'input',
        name: 'whyCustomerMatters',
        message: ('Why are those customers close to your heart?')
    },
    {
        type: 'input',
        name: 'companyMotivatesMeTo',
        message: ('If hired, what would you be motivated to do?')
    },
    {
        type: 'input',
        name: 'opportunitiesTheEmployerProvides1',
        message: ('What opportunities does this company offer it\'s employees?')
    },
    // {
    //     type: 'input',
    //     name: 'opportunitiesTheEmployerProvides2',
    //     message: ('What is another opportunity the company offer it\'s employees?')
    // },
    {
        type: 'input',
        name: 'techLanguage1',
        message: ('List a technical languages/skill you know?')
    },
    {
        type: 'input',
        name: 'techLanguage2',
        message: ('List a second technical languages/skill you know?')
    },
    {
        type: 'input',
        name: 'techLanguage3',
        message: ('List a third technical languages/skill you know?')
    },
    {
        type: 'input',
        name: 'techLanguage4',
        message: ('List a final technical languages/skill you know?')
    },
    {
        type: 'input',
        name: 'pastExperience',
        message: ('What was your last job?')
    },
    {
        type: 'input',
        name: 'pastAccomplishment1',
        message: ('What is a major past accomplishment?')
    },
    {
        type: 'input',
        name: 'pastAccomplishment2',
        message: ('What is another major past accomplishment?')
    }];

const signInPrompt = () =>
    inquirer.prompt(signinInput)
        .then(user => {
            attemptLogin(user);
            // .then(res => console.log(res));
        })
        .then(() => inquirer.prompt(mainQuestions))
        .catch(() => {
            console.log('ERROR: Invalid email or password');
            signInPrompt();
        });

const signUpPrompt = () => 
    inquirer.prompt(signupInput)
        .then(signUpData => {
            return  attemptSignUp(signUpData)
                .then(() => {
                    return inquirer.prompt(mainQuestions);
                    // if user redirect to mainQuestions, if no user route them back to sign up prompt
                    // if(user) {
                    //     console.log('User Recieved');
                    //     inquirer.prompt(mainQuestions);
                    // } else {
                    //     console.log('Invalid Sign-Up, Please Try Again');
                    // }
                })
                .catch(() => {
                    console.log('Email Taken, Please Try Again');
                   
                });
                           
              
        });

module.exports = { signInPrompt, signUpPrompt };
