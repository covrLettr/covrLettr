const inquirer = require('inquirer');
const { signInPrompt, signUpPrompt } = require('./questions');
const terminalImage = require('terminal-image');


const startApp = [{
    type: 'list',
    name: 'start',
    message: 'covrLettr: A Cover Letter Generator',
    choices: ['Sign In', 'Sign Up', 'Meet the Devs']
}];

const covrLettrLogo = 'assets/covrLettr.png';

const letterApp = () => {
    return terminalImage.file(covrLettrLogo)
        .then(img => console.log(img))
        .then(() => inquirer.prompt(startApp))
        .then(answers => {
            switch(answers.start) {
                case 'Sign In' :
                    signInPrompt().then(letterApp);
                    break;
                case 'Sign Up' :
                    signUpPrompt().then(letterApp);
                    break;
            }
        })
        .catch(err => {
            console.log('error:', err);
        });
};

module.exports = letterApp;
