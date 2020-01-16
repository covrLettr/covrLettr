const sentences = [{
    paragraph: 'intro',
    position: 0,
    text: 'If truly loving --somethingYouLove--  is wrong, I don’t want to be right. It seems like the rest of the team at --companyName-- feels the same way and that’s just one of the reasons why I think I’d be the perfect next hire for your development team.'
}, {
    paragraph: 'intro',
    position: 0,
    text: 'I’ve been giving my friends and family free computer advice since I was 10, and recently decided it’s time I get paid for it. That’s why I couldn’t believe it when I found a --positionTitle-- position at --companyName--.'
}, {
    paragraph: 'intro',
    position: 0,
    text: 'When I was growing up, all I wanted to be was one of those people who pretend to be statues on the street. Thankfully, my career goals have become a little more aspirational over the years, but I love to --passion1-- and --passion2--,  which make me the perfect --positionTitle--.'
}, {
    paragraph: 'intro',
    position: 0,
    text: 'You’ve slept on it. You’ve made lists of pros and cons. You’ve talked to your life coach, your hairdresser, and every barista on your block. So why haven’t you made your decision yet? Is it because you are a hiring manager who hasn’t found the right person?  You need an advocate, a listener, a --jobKeyWord3-- ... You need...me!'
}, {      //  ADD MORE INTROS ***************************************************************
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
    text: 'When I found the --positionTitle--  position available at --companyName-- I felt like it was meant for me.'
}, {
    paragraph: 'body1',
    position: 0,
    text: 'I came across --positionTitle-- and it would be a good fit as I have been following --companyName-- for some time.'
}, {
    paragraph: 'body1',
    position: 1,
    text: '--companyName--\'s mission to --companyMission-- aligns with what I value, --value1--, --value2--, --value3--.'
}, {
    paragraph: 'body1',
    position: 1,
    text: '--companyMission-- resonates with me because --whyLikeCompany--. '
}, {
    paragraph: 'body1',
    position: 1,
    text: 'Your mission to --companyMission-- speaks to me, as --value1--, --value2--, and --value3-- have been at the forefront of who I am for some time.'
}, {
    paragraph: 'body1',
    position: 1,
    text: 'I value --value1--, --value2--, and --value3-- because --lifeExperienceRelatedValues--.'
}, {
    paragraph: 'body1',
    position: 2,
    text: 'What I like about --companyName-- is --whyLikeCompany--.'
}, {
    paragraph: 'body1',
    position: 2,
    text: '--companyName-- is involved in --communityService-- and I am a big fan of helping out the community.'
}, {
    paragraph: 'body1',
    position: 2,
    text: 'I’ve been following --companyName-- for some time now and am impressed by --whyLikeCompany--.'
}, {
    paragraph: 'body1',
    position: 2,
    text: 'This company helps --companyCustomer--, which is important to me because --whyCustomerMatters--.'
}, {
    paragraph: 'body1',
    position: 3,
    text: 'This company’s culture and growth motivates me to --companyMotivatesMeTo--.'
}, {
    paragraph: 'body1',
    position: 3,
    text: 'I would love to be apart of --companyName-- to be able to contribute more in --communityService--.'
}, {
    paragraph: 'body1',
    position: 3,
    text: 'I’m excited to see how we are able to improve these technologies in the coming years.'
}, {
    paragraph: 'body1',
    position: 3,
    text: 'I believe this is a position where my passion for this industry can grow because of the --opportunitiesTheEmployerProvides1-- opportunities you provide to your employees.'
}, {
    paragraph: 'body2',
    position: 0,
    text: 'Some highlights of my tech stacks are --techLanguage1--, --techLanguage2--, --techLanguage3--, as well as --techLanguage4--.'
}, {
    paragraph: 'body2',
    position: 0,
    text: 'My current tech skills related to your posting are --techLanguage1--, --techLanguage2--, --techLanguage3--, as well as --techLanguage4--.'
}, {
    paragraph: 'body2',
    position: 0,
    text: 'I have experience using --techLanguage1--, --techLanguage2--, --techLanguage3--, as well as --techLanguage4--.'
}, {
    paragraph: 'body2',
    position: 0,
    text: 'I am familiar with many tech stacks including --techLanguage1--, --techLanguage2--, --techLanguage3--, as well as --techLanguage4--.'
}, {
    paragraph: 'body2',
    position: 1,
    text: 'Some examples of my past experience are --pastExperience-- and --skillJobDescription2--.'
}, {
    paragraph: 'body2',
    position: 1,
    text: 'The job description requires --skillJobDescription2-- and I believe my experiences as a --pastExperience-- will allow me to integrate into this position smoothly.'
}, {
    paragraph: 'body2',
    position: 1,
    text: 'My past work experience as a --pastExperience-- has prepared me well for the tech industry.  My --skillJobDescription1-- and --skillJobDescription2-- have been continuously strengthened with my everlasting grit.'
}, {
    paragraph: 'body2',
    position: 1,
    text: 'In my current position as a --pastExperience--, my key interest has been --jobKeyWord1--. '
}, {
    paragraph: 'body2',
    position: 2,
    text: 'A past accomplishment I’m proud of is --pastAccomplishment1--.'
}, {
    paragraph: 'body2',
    position: 2,
    text: 'In my past I have accomplished --pastAccomplishment1-- and --pastAccomplishment2--.'
}, {
    paragraph: 'body2',
    position: 2,
    text: 'I was able to --pastAccomplishment1-- and --pastAccomplishment2-- with these --skillJobDescription2--, and look forward to strengthening them further.'
}, {
    paragraph: 'body2',
    position: 2,
    text: 'My major accomplishments are --pastAccomplishment1-- and --pastAccomplishment2--.'
}, {
    paragraph: 'body2',
    position: 3,
    text: 'I would love the opportunity to bring these skills and the same quality of service to --companyName-- as the next --positionTitle--.'
}, {
    paragraph: 'body2',
    position: 3,
    text: 'I believe my current skills and past experiences make me a perfect candidate for --companyName--.'
}, {
    paragraph: 'body2',
    position: 3,
    text: 'I believe my skills and drive will blossom in this job because of the renowned support --companyName-- gives to its team.'
}, {
    paragraph: 'body2',
    position: 3,
    text: 'With my past experience and skills, I believe I would be a solid addition to --companyName--\'s --departmentName-- department.'
}, {
    paragraph: 'conclusion',
    position: 0,
    text: 'I\'d be thrilled to learn more about this job opening, and show you how I can help your mission to deliver excellence.'
}, {
    paragraph: 'conclusion',
    position: 0,
    text: 'I\'d love to show you how my skills can translate to real growth for both of us.'
}, {
    paragraph: 'conclusion',
    position: 0,
    text: 'If I\'m hired for this job, I\'ll exemplify the passion and commitment that helped me grow in my previous experience.'
}, {
    paragraph: 'conclusion',
    position: 0,
    text: 'I would relish the opportunity to show you what I can do for you.'
}, {
    paragraph: 'conclusion',
    position: 0,
    text: ' I believe I am the best person for this position and would love to meet you and share what I can bring to your company.'
}, {
    paragraph: 'conclusion',
    position: 0,
    text: 'I am excited to learn more about this position and demonstrate why I am a great fit for your company.'
}, {
    paragraph: 'conclusion',
    position: 0,
    text: 'I would love the opportunity to meet with you and share how I plan to hit the ground running.'
}, {
    paragraph: 'conclusion',
    position: 0,
    text: 'Thank you for taking the time to review my resume. I truly believe that my past experience and education would make me a valuable asset for your organization. I’m particularly excited about the opportunity to learn more about your technology and how I can contribute to that effort.'
}];

module.exports = sentences;
