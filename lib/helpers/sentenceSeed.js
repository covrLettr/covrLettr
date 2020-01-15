const Sentence = require('../models/Sentence');

module.exports = async() => {
    await Sentence.create([{
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
        text:''
    }, {
        paragraph: 'intro',
        position: 1,
        text:''
    }, {
        paragraph: 'intro',
        position: 1,
        text:''
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
        text: 'I came across --positionTitle--  it would be a good fit as I have been  following --companyName-- .'
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
        text: 'Some highlights of my tech stacks are --techLanguage1--, --techLanguage2--, --techLanguage3--, as well as --techLanguage4--'
    }, {
        paragraph: 'body2',
        position: 0,
        text: 'My current tech skills related to your posting are _________.'
    }, {
        paragraph: 'body2',
        position: 0,
        text: 'I have experience using --techLanguage1--, --techLanguage2--, --techLanguage3--, as well as --techLanguage4--'
    }, {
        paragraph: 'body2',
        position: 0,
        text: 'I am familiar with many tech stacks including --techLanguage1--, --techLanguage2--, --techLanguage3--, as well as --techLanguage4--'
    }, {
        paragraph: 'body2',
        position: 1,
        text: 'Some examples of my past experience __________'
    }, {
        paragraph: 'body2',
        position: 1,
        text: 'The job description requires [skills in job description] and I believe my experiences will allow me to integrate into this position smoothly.'
    }, {
        paragraph: 'body2',
        position: 1,
        text: 'My past work experience has prepared me well for the tech industry.  My skill and other skill skills have been strengthened  through job detail and other job detail.'
    }, {
        paragraph: 'body2',
        position: 1,
        text: 'In my current position as a [Position] with [Current Organization/Company Name], my key challenge has been [Main Responsibility]. '
    }, {
        paragraph: 'body2',
        position: 2,
        text: 'A past accomplishment I’m proud of is --pastAccomplishment1--.'
    }, {
        paragraph: 'body2',
        position: 2,
        text: 'In my past I have accomplished --pastAccomplishment1-- and --pastAccomplishment1--.'
    }, {
        paragraph: 'body2',
        position: 2,
        text: 'I was able to accomplishment and accomplishment with these skills, and look forward to strengthening them further.'
    }, {
        paragraph: 'body2',
        position: 2,
        text: `My major accomplishments are: 
    * --pastAccomplishment1--
    * --pastAccomplishment1--.`
    }, {
        paragraph: 'body2',
        position: 3,
        text: 'I would love the opportunity to bring these skills and the same quality of service to --companyName-- as the next --positionTitle--.'
    }, {
        paragraph: 'body2',
        position: 3,
        text: 'I believe my current skills and past experiences make me a perfect candidate for --companyName--'
    }, {
        paragraph: 'body2',
        position: 3,
        text: 'I believe my skills and drive will blossom in this job because of the renowned support --companyName-- gives to its team'
    }, {
        paragraph: 'body2',
        position: 3,
        text: 'With my past experience and skills, I believe I would be a solid addition to --companyName--\'s [department name]department.'
    }, {
        paragraph: 'conclusion',
        position: 0,
        text: ''
    }, {
        paragraph: 'conclusion',
        position: 0,
        text: ''
    }, {
        paragraph: 'conclusion',
        position: 0,
        text: ''
    }, {
        paragraph: 'conclusion',
        position: 0,
        text: ''
    }, {
        paragraph: 'conclusion',
        position: 1,
        text: ''
    }, {
        paragraph: 'conclusion',
        position: 1,
        text: ''
    }, {
        paragraph: 'conclusion',
        position: 1,
        text: ''
    }, {
        paragraph: 'conclusion',
        position: 1,
        text: ''
    }]);
};
