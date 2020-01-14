const chance = require('chance').Chance();
const UserAnswer = require('../models/UserAnswer');

module.exports = async({ userAnswers = 10 } = {}) => {
    await UserAnswer.create([...Array(userAnswers)].map(() => ({
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
    })));
};

const sentences = [{
    paragraph: 'intro',
    position: 0,
    text: ''
}, {
    paragraph: 'intro',
    position: 0,
    text: ''
}, {
    paragraph: 'intro',
    position: 0,
    text: ''
}, {
    paragraph: 'intro',
    position: 0,
    text: ''
}, {
    paragraph: 'intro',
    position: 1,
    text: ''
}, {
    paragraph: 'intro',
    position: 1,
    text:
}, {
    paragraph: 'intro',
    position: 1,
    text:
}, {
    paragraph: 'intro',
    position: 1,
    text:
}, {
    paragraph: 'body1',
    position: 0,
    text: 'I would love to bring my skills and services at --companyName-- as the next --positionTitle--.'
}, {
    paragraph: 'body1',
    position: 0,
    text: '--companyName--\'s job listing for --positionTitle-- immediately caught my eye.'
}, {
    paragraph: 'body1',
    position: 0,
    text: 'When I found the --positionTitle--  position available at --companyName-- I felt like it was meant for me'
}, {
    paragraph: 'body1',
    position: 0,
    text: 'I came across --positionTitle--   it would be a good fit as I have been  following --companyName-- .'
}, {
    paragraph: 'body1',
    position: 1,
    text: '--companyName--\'s mission to --companyMission-- aligns with what I value, --value1--, --value2--, --value3--'
}, {
    paragraph: 'body1',
    position: 1,
    text: '--companyMission-- resonates with me because ___[sentence fill in]. '
}, {
    paragraph: 'body1',
    position: 1,
    text: 'Your mission to --companyMission-- speaks to me, as --value1--, --value2--, and --value3-- have been at the forefront of who I am for some time.'
}, {
    paragraph: 'body1',
    position: 1,
    text: 'I value --value1--, --value1--, and --value1-- because [life experience related to values]'
}, {
    paragraph: 'body1',
    position: 2,
    text: 'What I like about --companyName-- is __[sentence fill in].'
}, {
    paragraph: 'body1',
    position: 2,
    text: '--companyName-- is involved in ____[community service] and I am a big fan of helping out the community.'
}, {
    paragraph: 'body1',
    position: 2,
    text: 'I’ve been following --companyName-- for some time now and am impressed by [what impresses you about company.]'
}, {
    paragraph: 'body1',
    position: 2,
    text: 'This company helps [demographic of customers], which is important to me because [why that demographic is close to my heart].'
}, {
    paragraph: 'body1',
    position: 3,
    text: 'This company’s culture and growth motivates me to ________. '
}, {
    paragraph: 'body1',
    position: 3,
    text: 'I would love to be apart of [company name] to be able to contribute more in [community service]'
}, {
    paragraph: 'body1',
    position: 3,
    text: 'I’m excited to see how we are able to improve these technologies in the coming years.'
}, {
    paragraph: 'body1',
    position: 3,
    text: 'I believe this is a position where my passion for this industry can grow because of the {opportunities employer provides} opportunities you provide to your employees.'
}, {
    paragraph: 'body2',
    position: 0,
    text: 'Some highlights of my tech stacks are --techLanguage1--, --techLanguage2--, --techLanguage3--, --techLanguage4--'
}, {
    paragraph: 'body2',
    position: 0,
    text:
}, {
    paragraph: 'body2',
    position: 0,
    text:
}, {
    paragraph: 'body2',
    position: 0,
    text:
}, {
    paragraph: 'body2',
    position: 1,
    text:
}, {
    paragraph: 'body2',
    position: 1,
    text:
}, {
    paragraph: 'body2',
    position: 1,
    text:
}, {
    paragraph: 'body2',
    position: 1,
    text:
}, {
    paragraph: 'body2',
    position: 2,
    text:
}, {
    paragraph: 'body2',
    position: 2,
    text:
}, {
    paragraph: 'body2',
    position: 2,
    text:
}, {
    paragraph: 'body2',
    position: 2,
    text:
}, {
    paragraph: 'body2',
    position: 3,
    text:
}, {
    paragraph: 'body2',
    position: 3,
    text:
}, {
    paragraph: 'body2',
    position: 3,
    text:
}, {
    paragraph: 'body2',
    position: 3,
    text:
}, {
    paragraph: 'conclusion',
    position: 0,
    text:
}, {
    paragraph: 'conclusion',
    position: 0,
    text:
}, {
    paragraph: 'conclusion',
    position: 0,
    text:
}, {
    paragraph: 'conclusion',
    position: 0,
    text:
}, {
    paragraph: 'conclusion',
    position: 1,
    text:
}, {
    paragraph: 'conclusion',
    position: 1,
    text:
}, {
    paragraph: 'conclusion',
    position: 1,
    text:
}, {
    paragraph: 'conclusion',
    position: 1,
    text:
}];


