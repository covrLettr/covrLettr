var inquirer = require('inquirer');
const validator = require('email-validator');
const chalk = require('chalk');
const request = require('superagent');
const { attemptLogin, attemptSignUp } = require('./services/auth');
const { postUserAnswers } = require('./services/userAnswersPost');

const signinInput = [
    {
        type: 'input',
        name: 'email',
        message: chalk.green('Please enter your email'),
        validate: function validEmail(email) {
            if(!validator.validate(email)) {
                return chalk.red('Please enter a valid email');
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'password',
        name: 'password',
        message: chalk.green('Please enter a password'),
        validate: function validPass(pass) {
            if(pass.length !== 0) {
                return true;
            }
            else {
                return chalk.red('Please enter a valid password');
            }
        }
    }
];

const signupInput = [
    {
        type: 'input',
        name: 'email',
        message: chalk.green('Please enter your email'),
        validate: function validEmail(email) {
            if(!validator.validate(email)) {
                return chalk.red('Please enter a valid email');
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'password',
        name: 'password',
        message: chalk.green('Please enter a password'),
        validate: function validPass(pass) {
            if(pass.length !== 0) {
                return true;
            }
            else {
                return chalk.red('Please enter a valid password');
            }
        }
    }
];


const mainQuestions = [
    {
        type: 'input',
        name: 'name',
        message: chalk.white('What is your name?')
    },
    {
        type: 'list',
        name: 'pronoun',
        message: chalk.yellow('What are your pronouns?'),
        choices: ['they/them', 'she/her', 'he/him']
    },
    {
        type: 'list',
        name: 'greeting',
        message: chalk.greenBright('What is your preferred greeting?'),
        choices: ['Dear', 'Attention:', 'Hello']
    },
    {
        type: 'input',
        name: 'email',
        message: chalk.magenta('What is your email?')
    },
    {
        type: 'input',
        name: 'companyName',
        message: chalk.green('What is the company\'s name?')
    },
    {
        type: 'input',
        name: 'hiringManager',
        message: chalk.white('Who is the hiring manager?')
    },
    {
        type: 'input',
        name: 'companyAddress',
        message: chalk.redBright('What is the company\'s address?')
    },
    {
        type: 'input',
        name: 'companyMission',
        message: chalk.yellowBright('What is the company\'s mission statement?')
    },
    {
        type: 'input',
        name: 'departmentName',
        message: chalk.green('What department are you applying for?')
    },
    {
        type: 'input',
        name: 'jobKeyWord1',
        message: chalk.blueBright('What is one key word from the job description?')
    },
    {
        type: 'input',
        name: 'jobKeyWord2',
        message: chalk.redBright('What is another key word from the job description?')
    },
    {
        type: 'input',
        name: 'jobKeyWord3',
        message: chalk.magentaBright('What is a third key word from the job description?')
    },
    {
        type: 'input',
        name: 'positionTitle',
        message: chalk.whiteBright('What is the position you are applying for?')
    },
    {
        type: 'input',
        name: 'passion1',
        message: chalk.green('What is one of your passions?')
    },
    {
        type: 'input',
        name: 'passion2',
        message: chalk.red('What is another passion?')
    },
    {
        type: 'input',
        name: 'passion3',
        message: chalk.yellow('Name a third passion')
    },
    {
        type: 'input',
        name: 'skillJobDescription1',
        message: chalk.green('What is a skill you have that the job requires?')
    },
    {
        type: 'input',
        name: 'skillJobDescription2',
        message: chalk.magenta('What is another skill you have that the job requires?')
    },
    {
        type: 'input',
        name: 'skillJobDescription3',
        message: chalk.yellow('What is a third skill you have that the job requires?')
    },
    {
        type: 'input',
        name: 'whyLikeCompany',
        message: chalk.white('Why do you like this company?')
    },
    {
        type: 'input',
        name: 'somethingYouLove',
        message: chalk.greenBright('What is something you love?')
    },
    {
        type: 'input',
        name: 'value1',
        message: chalk.blue('List one of your values.')
    },
    {
        type: 'input',
        name: 'value2',
        message: chalk.yellow('List another one of your values.')
    },
    {
        type: 'input',
        name: 'value3',
        message: chalk.red('Name a third value.')
    },
    {
        type: 'input',
        name: 'lifeExperienceRelatedValues',
        message: chalk.white('Tell me about a time in your life when you demonstrated one of those values?')
    },
    {
        type: 'input',
        name: 'communityService',
        message: chalk.blueBright('Is the organization a part of any community service? If so, what?')
    },
    {
        type: 'input',
        name: 'companyCustomer',
        message: chalk.green('Who are the target customers of this company?')
    },
    {
        type: 'input',
        name: 'whyCustomerMatters',
        message: chalk.magenta('Why are those customers close to your heart?')
    },
    {
        type: 'input',
        name: 'companyMotivatesMeTo',
        message: chalk.yellow('If hired, what would you be motivated to do?')
    },
    {
        type: 'input',
        name: 'opportunitiesTheEmployerProvides1',
        message: chalk.red('What opportunities does this company offer it\'s employees?')
    },
    // {
    //     type: 'input',
    //     name: 'opportunitiesTheEmployerProvides2',
    //     message: ('What is another opportunity the company offer it\'s employees?')
    // },
    {
        type: 'input',
        name: 'techLanguage1',
        message: chalk.magenta('List a technical languages/skill you know?')
    },
    {
        type: 'input',
        name: 'techLanguage2',
        message: chalk.blue('List a second technical languages/skill you know?')
    },
    {
        type: 'input',
        name: 'techLanguage3',
        message: chalk.green('List a third technical languages/skill you know?')
    },
    {
        type: 'input',
        name: 'techLanguage4',
        message: chalk.yellow('List a final technical languages/skill you know?')
    },
    {
        type: 'input',
        name: 'pastExperience',
        message: chalk.blueBright('What was your last job?')
    },
    {
        type: 'input',
        name: 'pastAccomplishment1',
        message: chalk.yellowBright('What is a major past accomplishment?')
    },
    {
        type: 'input',
        name: 'pastAccomplishment2',
        message: chalk.greenBright('What is another major past accomplishment?')
    },
    {
        type: 'list',
        name: 'sincerely',
        message: chalk.magenta('What is your preferred signoff?'),
        choices: ['Sincerely', 'Thank you', 'Best regards', 'Thank you for your consideration']
    }];

const signInPrompt = () =>
    inquirer.prompt(signinInput)
        .then(user => {
            attemptLogin(user);
        })
        .then(() => inquirer.prompt(mainQuestions))
        .catch(() => {
            console.log('ERROR: Invalid email or password');
            signInPrompt();
        });

const mainQuestionsPrompt = (user) => 
    inquirer.prompt(mainQuestions)
        .then(answers => {
            console.log('After MainQuestions');
            console.log(user);
            const userAnswer = { ...answers, userId: user._id };
            console.log(userAnswer);
            postUserAnswers(userAnswer)
                .then(res => console.log(res))
                .catch(console.log('Main Questions Error'));
        });

const signUpPrompt = () => 
    inquirer.prompt(signupInput)
        .then(signUpData => {
            return attemptSignUp(signUpData)
                .then((res) => {
                    return mainQuestionsPrompt(res.body);
                })
                
                .catch(() => {
                    console.log('Email Taken, Please Try Again');
                    signUpPrompt();
                });
                           
              
        });

module.exports = { signInPrompt, signUpPrompt };
