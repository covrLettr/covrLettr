const mashIt = (sentencesArr, userAnswers) => {
    const myRegex = /--(?<key>\w+)--/g;
    // const innerTextRegex = /([^-]+)/g;
    const populatedSentences = [];
    sentencesArr.forEach(sentObj => {
        let text = sentObj.text;
        // sentObj.text = text.replace(myRegex, (match, key) => {
        //     return userAnswers[key];
        // })
        let match;
        // eslint-disable-next-line no-cond-assign
        while(match = myRegex.exec(text)) {
            sentObj.text = sentObj.text.replace(match[0], userAnswers[match.groups.key]);
        }
        populatedSentences.push(sentObj.text);
    });
    return populatedSentences;
};

// const mashStr = (str, userAnswers){
//     const myRegex = /--(?<key>\w+)--/g;
//     let match;
//     // eslint-disable-next-line no-cond-assign
//     while (match = myRegex.exec(text)) {
//         sentObj.text = sentObj.text.replace(match[0], userAnswers[match.groups.key]);
//     }
//     return 
// }

const header = [{ text: `--name-- (--pronoun--)
--email--
--companyName--
--companyAddress--
--greeting-- --hiringManager--,` }];

const sincerely = [{ text: `--sincerely--,
--name--` }];

module.exports = { mashIt, header, sincerely };
//     let currentIndex = 0;
//     sentencesArr.forEach(sentenceObj => {
//         sentenceObj.text = populatedSentences[currentIndex];
//         currentIndex++;
//     });
//     const allSentences = sentencesArr.map(sentObj =>  sentObj.text);
//     const groupBy = (arr, property) => {
//         return arr.reduce((acc, curr) => {
//             if(!acc[curr[property]]) { acc[curr[property]] = []; }
//             acc[curr[property]].push(curr);
//             return acc;
//         }, []);
//     };
//     const wholeArray = [introP, groupBy(body1P, 'position'), groupBy(body2P, 'position'), conclusionP];
//     const randomIndex = (arr) => Math.floor(Math.random() * ((arr.length - 1) + 0));
//     let finalCoverLetter = '';
//     const coverLetterArr = [];
//     while(coverLetterArr.length < 900){
//         const introPFinal = wholeArray[0][randomIndex(wholeArray[0])].text;
//         finalCoverLetter += introPFinal;
//         const body1PS1Final = wholeArray[1][0][randomIndex(wholeArray[1][0])].text;
//         finalCoverLetter += body1PS1Final;
//         const body1PS2Final = wholeArray[1][1][randomIndex(wholeArray[1][1])].text;
//         finalCoverLetter += body1PS2Final; 
//         const body1PS3Final = wholeArray[1][2][randomIndex(wholeArray[1][2])].text;
//         finalCoverLetter += body1PS3Final;
//         const body1PS4Final = wholeArray[1][3][randomIndex(wholeArray[1][3])].text;
//         finalCoverLetter += body1PS4Final; 
//         const body2PS1Final = wholeArray[2][0][randomIndex(wholeArray[2][0])].text;
//         finalCoverLetter += body2PS1Final; 
//         const body2PS2Final = wholeArray[2][1][randomIndex(wholeArray[2][1])].text;
//         finalCoverLetter += body2PS2Final; 
//         const body2PS3Final = wholeArray[2][2][randomIndex(wholeArray[2][2])].text;
//         finalCoverLetter += body2PS3Final; 
//         const body2PS4Final = wholeArray[2][3][randomIndex(wholeArray[2][3])].text;
//         finalCoverLetter += body2PS4Final; 
//         const conclusionPFinal = wholeArray[3][randomIndex(wholeArray[3])].text;
//         finalCoverLetter += conclusionPFinal;
//         if(!coverLetterArr.includes(finalCoverLetter))  { 
//             coverLetterArr.push(finalCoverLetter);
//         }
//     }
//     console.log(coverLetterArr);
//     return finalCoverLetter; 
// };
// populateSentences(sentences, answers);
// //  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // const mashIt = (sentencesArr, userAnswers) => {
// //     const myRegex = /--([^-]+)--/g;
// //     const innerTextRegex = /([^-]+)/g;
// //     const arrOfWordArrs = sentencesArr.map(sentenceObj => {
// //         const str = sentenceObj.text;
// //         const regexMatches = Array.from(str.matchAll(myRegex), m => m[0]);
// //         const allFields = regexMatches.map(match => match.match(innerTextRegex)).flat();
// //         if(allFields.length) {
// //             return allFields;
// //         }
// //     });
// //     const foundFields = arrOfWordArrs.filter(p => p !== undefined).flat();
// //     console.log({ FOUND_FIELDS: foundFields });
// // const toot = sentencesArr.forEach((sentenceObj, i) => {
// //     // if (myRegex.test(sentenceObj.text)) {
// //         const sentenceArr = sentenceObj.text.split(' ').reduce((acc, ind, x) => {
// //             if (myRegex.test(ind)) {
// //                 if(ind.split.includes('.') || ind.split.includes(','){
// //                     const split = ind.split();
// //                     const end = split[split.length - 1];
// //                     
// //                 })
// //                 });
// //                 console.log(i);
// //             }
// //         }, '');
// //     // }
// // });
// //     const toot = sentencesArr.map(sentObj => {
// //         if(myRegex.test(sentObj.text)) {
// //             const sentenceArr = sentObj.text.split(' ');
// //             console.log('FLAGLSCHTAFF', sentenceArr);
// //             sentenceArr.forEach((word, index) => {
// //                 if(myRegex.test(word)) {
// //                     let foundField = foundFields[index];
// //                     let foundAnswer = userAnswers[foundField];
// //                     sentenceArr.splice(index, 1, foundAnswer);
// //                 }
// //             });
// //             return sentenceArr.join(' ');
// //         }
// //     });
// //     return toot;
// // };
// //  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //  DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO NOT DLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // 
// // const toot = sentencesArr.forEach((sentenceObj, i) => {
// //     if(myRegex.test(sentenceObj.text)) {
// //         const sentenceArr = sentenceObj.text.split(' ').reduce((acc, curr, ind, arr) => {
// //             if(myRegex.test(curr)) {
// //                 if((curr.split('').includes('.') || curr.split('').includes(',')) && curr.split('')) {
// //                     const splitWord = curr.split('');
// //                     const end = splitWord[splitWord.length - 1];
// //                     const fieldName = splitWord.filter(letter => letter !== '-' && letter !== '.' && letter !== ',').join('');
// //                     const changed = userAnswers[fieldName];
// //                     acc += changed + end + ' ';
// //                 } else if(curr.split('').includes('\'') && curr.split('')) {
// //                     const splitWord = curr.split('');
// //                     const end2 = splitWord.slice(splitWord.length - 2).join('');
// //                     const fieldName = splitWord.filter(letter => letter !== '-' && letter !== '\'' && letter !== 's').join('');
// //                     const changed = userAnswers[fieldName];
// //                     acc += changed + end2 + ' ';
// //                 } else {
// //                     const splitWord = curr.split('');
// //                     const fieldName = splitWord.filter(letter => letter !== '-').join('');
// //                     console.log({ FIELDNAME: fieldName });
// //                     const changed = userAnswers[fieldName];
// //                     console.log({ CHANGED: changed });
// //                     acc += changed + ' ';
// //                     console.log({ SHOWITTOUS: acc });
// //                 }
// //             }
// //             acc += curr + ' ';
// //             console.log({ ACC: acc });
// //             return acc;
// //         }, '');
// //         return sentenceArr;
// //     }
// // });
// // console.log(toot);
// // return toot;
// // };