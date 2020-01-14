const chance = require('chance').Chance();
const UserAnswer = require('../models/UserAnswer');

module.exports = async({ userAnswer = 10 } = {}) => {
    await UserAnswer.create([...Array(userAnswer)].map(() => ({
        name: chance.name(),
        pronoun: 'they/them',
        email: chance.email(),
        phone: chance.phone(),
        address: chance.address(),
        companyName: chance.company(),
        companyAddress: chance.address(),
        hiringManager: chance.name(),
        companyMission: chance.sentence(),
        jobKeyword1: chance.word(),
        jobKeyword2: chance.word(),
        jobKeyword3: chance.word(),
        passion1: chance.word(),
        passion2: chance.word(),
        passion3: chance.word(),
        positionTitle: chance.word(),
        value1: chance.word(),
        value2: chance.word(),
        value3: chance.word(),
        companyCustomer: chance.company(),
        whyCustomerMatters: chance.sentence(),
        companyMotivatesMeTo: chance.sentence(),
        opportunitiesTheEmployerProvides1: chance.sentence(),
        opportunitiesTheEmployerProvides2: chance.sentence(),
        techLanguage1: chance.word(),
        techLanguage2: chance.word(),
        techLanguage3: chance.word(),
        techLanguage4: chance.word(),
        pastExperience: chance.sentence(),
        skillJobDescription1: chance.word(),
        skillJobDescription2: chance.word(),
        skillJobDescription3: chance.word(),
        mainResponsibilityAtOldJob: chance.sentence(),
        pastAccomplishment1: chance.sentence(),
        pastAccomplishment2: chance.sentence(),
        excitedToDo: chance.sentence(),
        greeting: 'Dear',
        sincerely: 'Sincerely'
    })))
        .then(createdAnswers => {
            console.log('seeded answers!', createdAnswers[0].id);
        });
};
