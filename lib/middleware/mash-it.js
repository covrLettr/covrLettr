const sentences = require('../helpers/sentenceSeed');

const answers = {
    name: 'George',
    pronoun: 'he/him',
    email: 'funk@delics.com',
    companyName: 'funkadelictronics',
    companyAddress: '324 funky way, There, OR',
    hiringManager: 'Billy Joel',
    companyMission: 'Hickory Dickory Dock',
    jobKeyWord1: 'analyze',
    jobKeyWord2: 'organize',
    jobKeyWord3: 'data',
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

const populateSentences = (sentencesArr, userAnswers) => {
    const myRegex = /--(?<key>\w+)--/g;
    // const innerTextRegex = /([^-]+)/g;
    const populatedSentences = [];
    sentencesArr.forEach(sentObj => {
        let text = sentObj.text;

        // sentObj.text = text.replace(myRegex, (match, key) => {
        //     return userAnswers[key];
        // })

        let match;
        while(match = myRegex.exec(text)){
            sentObj.text = sentObj.text.replace(match[0], userAnswers[match.groups.key]);
        }
        populatedSentences.push(sentObj.text);
        // return sentObj.text;
    });

    let currentIndex = 0;

    sentencesArr.forEach(sentenceObj => {
        sentenceObj.text = populatedSentences[currentIndex];
        currentIndex++;
    });

    const introP = [];           // REFACTOR WITH REDUCE SMART PERSON!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const body1P = [];
    const body2P = [];
    const conclusionP = [];
    sentencesArr.forEach(sentObj => {
        if(sentObj.paragraph === 'intro'){
            introP.push(sentObj);
        } else if(sentObj.paragraph === 'body1') {
            body1P.push(sentObj);
        } else if(sentObj.paragraph === 'body2') {
            body2P.push(sentObj);
        } else {
            conclusionP.push(sentObj);
        }
    });

    const groupBy = (arr, property) => {
        return arr.reduce((acc, x) => {
            if(!acc[x[property]]) { acc[x[property]] = []; }
            acc[x[property]].push(x);
            return acc;
        }, []);
    };

    const wholeArray = [introP, groupBy(body1P, 'position'), groupBy(body2P, 'position'), conclusionP];

    const randomIndex = (arr) => Math.floor(Math.random() * ((arr.length - 1) + 0));

    let finalCoverLetter = '';

    const coverLetterArr = [];
    while(coverLetterArr.length < 900){
        const introPFinal = wholeArray[0][randomIndex(wholeArray[0])].text;
        finalCoverLetter += introPFinal;
    
        const body1PS1Final = wholeArray[1][0][randomIndex(wholeArray[1][0])].text;
        finalCoverLetter += body1PS1Final;
        const body1PS2Final = wholeArray[1][1][randomIndex(wholeArray[1][1])].text;
        finalCoverLetter += body1PS2Final; 
        const body1PS3Final = wholeArray[1][2][randomIndex(wholeArray[1][2])].text;
        finalCoverLetter += body1PS3Final;
        const body1PS4Final = wholeArray[1][3][randomIndex(wholeArray[1][3])].text;
        finalCoverLetter += body1PS4Final; 

        const body2PS1Final = wholeArray[2][0][randomIndex(wholeArray[2][0])].text;
        finalCoverLetter += body2PS1Final; 
        const body2PS2Final = wholeArray[2][1][randomIndex(wholeArray[2][1])].text;
        finalCoverLetter += body2PS2Final; 
        const body2PS3Final = wholeArray[2][2][randomIndex(wholeArray[2][2])].text;
        finalCoverLetter += body2PS3Final; 
        const body2PS4Final = wholeArray[2][3][randomIndex(wholeArray[2][3])].text;
        finalCoverLetter += body2PS4Final; 

        const conclusionPFinal = wholeArray[3][randomIndex(wholeArray[3])].text;
        finalCoverLetter += conclusionPFinal;

        if(!coverLetterArr.includes(finalCoverLetter))  { 
            coverLetterArr.push(finalCoverLetter);
        }
    }

    console.log(coverLetterArr);
    return finalCoverLetter; 
};

populateSentences(sentences, answers);



//  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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

//  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 
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
// };
