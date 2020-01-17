const mashIt = (sentencesArr, userAnswers) => {
    const myRegex = /--(?<key>\w+)--/g;
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

const header = [{ text: `--name-- (--pronoun--)
--email--
--companyName--
--companyAddress--
--greeting-- --hiringManager--,` }];

const sincerely = [{ text: `--sincerely--,
--name--` }];

module.exports = { mashIt, header, sincerely };
