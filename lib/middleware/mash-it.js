const sentences = [{
    paragraph: 'intro',
    position: 0,
    text: 'If truly loving --somethingYouLove-- is wrong, I don’t want to be right. It seems like the rest of the team at --companyName-- feels the same way—and that’s just one of the reasons why I think I’d be the perfect next hire for your development team.'
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
    text: 'You’ve slept on it. You’ve made lists of pros and cons. You’ve talked to your life coach, your hairdresser, and every barista on your block. So why haven’t you made your decision yet? Is it because you are a hiring manager who hasn’t found the right person? You need an advocate, a listener, a --jobKeyword3-- ... You need...me!'
}, {
    paragraph: 'intro',
    position: 1,
    text: ''
}, {
    paragraph: 'intro',
    position: 1,
    text: ''
}, {
    paragraph: 'intro',
    position: 1,
    text: ''
}, {
    paragraph: 'intro',
    position: 1,
    text: ''
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
    text: 'When I found the --positionTitle--  position available at --companyName-- I felt like it was meant for me.'
}, {
    paragraph: 'body1',
    position: 0,
    text: 'I came across --positionTitle--   it would be a good fit as I have been  following --companyName-- .'
}, {
    paragraph: 'body1',
    position: 1,
    text: '--companyName-- \'s mission to --companyMission-- aligns with what I value, --value1--, --value2--, --value3--.'
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
    text: 'Some examples of my past experience are --pastExperience-- and --skillsJobDescription2--.'
}, {
    paragraph: 'body2',
    position: 1,
    text: 'The job description requires --skillsJobDescription2-- and I believe my experiences as a --pastExperience-- will allow me to integrate into this position smoothly.'
}, {
    paragraph: 'body2',
    position: 1,
    text: 'My past work experience as a --pastExperience-- has prepared me well for the tech industry. My skill and other skill skills have been strengthened through --skillsJobDescription1-- and --skillsJobDescription2--.'
}, {
    paragraph: 'body2',
    position: 1,
    text: 'In my current position as a --pastExperience--, my key interest has been --jobKeyWord--. '
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
}];

const answers = {
    name: 'George',
    pronoun: 'he/him',
    email: 'funk@delics.com',
    address: '77 the place, Here, OH',
    companyName: 'funkadelictronics',
    companyAddress: '324 funky way, There, OR',
    hiringManager: 'Billy Joel',
    companyMission: 'Hickory Dickory Dock',
    jobKeyword1: 'analyze',
    jobKeyword2: 'organize',
    jobKeyword3: 'data',
    passion1: 'data',
    passion2: 'Orangutans',
    passion3: 'Peaches',
    positionTitle: 'Boss ass dev',
    value1: 'integrity',
    value2: 'honesty',
    value3: 'gettin drunk',
    companyCustomer: 'liquor stores ONLY',
    whyCustomerMatters: 'they drink liquor',
    companyMotivatesMeTo: 'drink more liquor',
    opportunitiesTheEmployerProvides1: 'free liquor',
    techLanguage1: 'Javascript',
    techLanguage2: 'Node',
    techLanguage3: 'React',
    techLanguage4: 'Express',
    pastExperience: 'Bein a boss',
    skillJobDescription1: 'Javascript',
    skillJobDescription2: 'Intrapersonal',
    skillJobDescription3: 'Organization',
    pastAccomplishment1: 'Made a full-stack app',
    pastAccomplishment2: 'Made a back-end app',
    greeting: 'Dear',
    sincerely: 'Sincerely',
    somethingYouLove: 'corgi',
    whyLikeCompany: 'baby yoda holding a corgi',
    communityService: 'floating corgi',
    lifeExperienceRelatedValues: 'corgi1 corgi2',
    departmentName: 'corgiLord'
};

// const mashIt = (sentencesArr, userAnswers) => {
//     const myRegex = /--([^-]+)--/g;
//     const innerTextRegex = /([^-]+)/g;

//     const arrOfWordArrs = sentencesArr.map(sentenceObj => {
//         const str = sentenceObj.text;
//         const regexMatches = Array.from(str.matchAll(myRegex), m => m[0]);
//         const allFields = regexMatches.map(match => match.match(innerTextRegex)).flat();
//         if(allFields.length) {
//             return allFields;
//         }
//     });

//     const foundFields = arrOfWordArrs.filter(p => p !== undefined).flat();
//     console.log({ FOUND_FIELDS: foundFields });
    
// const toot = sentencesArr.forEach((sentenceObj, i) => {
//     // if (myRegex.test(sentenceObj.text)) {
//         const sentenceArr = sentenceObj.text.split(' ').reduce((acc, ind, x) => {
//             if (myRegex.test(ind)) {
//                 if(ind.split.includes('.') || ind.split.includes(','){

//                     const split = ind.split();
//                     const end = split[split.length - 1];
//                     
//                 })

//                 });
//                 console.log(i);
                    
//             }
//         }, '');
//     // }
// });
//     const toot = sentencesArr.map(sentObj => {
//         if(myRegex.test(sentObj.text)) {
//             const sentenceArr = sentObj.text.split(' ');
//             console.log('FLAGLSCHTAFF', sentenceArr);
            
//             sentenceArr.forEach((word, index) => {
//                 if(myRegex.test(word)) {
//                     let foundField = foundFields[index];
//                     let foundAnswer = userAnswers[foundField];
//                     sentenceArr.splice(index, 1, foundAnswer);
//                 }

//             });
//             return sentenceArr.join(' ');
//         }
//     });
//     return toot;
// };

const mashIt = (sentencesArr, userAnswers) => {
    const myRegex = /--(?<key>\w+)--/g;
    // const innerTextRegex = /([^-]+)/g;
    sentencesArr.forEach(sentObj => {
        let text = sentObj.text;

        let match;
        while(match = myRegex.exec(text)){
            sentObj.text = sentObj.text.replace(match[0], userAnswers[match.groups.key]);
        }
        console.log(sentObj.text);
        
    })
    // const arrOfWordArrs = sentencesArr.map(sentenceObj => {
    //     const str = sentenceObj.text;
    //     const regexMatches = Array.from(str.matchAll(myRegex), m => m[0]);
    //     console.log(regexMatches);

    //     const allFields = regexMatches.map(match => match.match(innerTextRegex)).flat();
    //     console.log(allFields);
    //     if(allFields.length) {
    //         return allFields;
    //     }
    // });

    // const foundFields = arrOfWordArrs.filter(p => p !== undefined).flat();
    // console.log({
    //     FOUND_FIELDS: foundFields
    // });

    // const toot = sentencesArr.forEach((sentenceObj, i) => {
    //     if(myRegex.test(sentenceObj.text)) {
    //         const sentenceArr = sentenceObj.text.split(' ').reduce((acc, curr, ind, arr) => {
    //             if(myRegex.test(curr)) {
    //                 if((curr.split('').includes('.') || curr.split('').includes(',')) && curr.split('')) {
    //                     const splitWord = curr.split('');

    //                     const end = splitWord[splitWord.length - 1];

    //                     const fieldName = splitWord.filter(letter => letter !== '-' && letter !== '.' && letter !== ',').join('');
    //                     const changed = userAnswers[fieldName];
    //                     acc += changed + end + ' ';
    //                 } else if(curr.split('').includes('\'') && curr.split('')) {
    //                     const splitWord = curr.split('');

    //                     const end2 = splitWord.slice(splitWord.length - 2).join('');

    //                     const fieldName = splitWord.filter(letter => letter !== '-' && letter !== '\'' && letter !== 's').join('');
    //                     const changed = userAnswers[fieldName];
    //                     acc += changed + end2 + ' ';
    //                 } else {
    //                     const splitWord = curr.split('');

    //                     const fieldName = splitWord.filter(letter => letter !== '-').join('');
    //                     console.log({ FIELDNAME: fieldName });
                        
    //                     const changed = userAnswers[fieldName];
    //                     console.log({ CHANGED: changed });
                        
    //                     acc += changed + ' ';
    //                     console.log({ SHOWITTOUS: acc });
    //                 }
    //             }
    //             acc += curr + ' ';
    //             console.log({ ACC: acc });
    //             return acc;
    //         }, '');
    //         return sentenceArr;
    //     }
    // });
    // console.log(toot);

    // return toot;
};

console.log('FINAL', mashIt(sentences, answers));
