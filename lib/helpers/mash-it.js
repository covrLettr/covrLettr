const mashIt = (sentencesArr, userAnswers) => {
    const myRegex = /--(?<key>\w+)--/g;
    // use map here instead of forEach
    return sentencesArr.map(sentObj => {
        let text = sentObj.text;
        // sentObj.text = text.replace(myRegex, (match, key) => {
        //     return userAnswers[key];
        // })
        let match;
        // eslint-disable-next-line no-cond-assign
        while(match = myRegex.exec(text)) {
            sentObj.text = sentObj.text.replace(match[0], userAnswers[match.groups.key]);
        }
        return sentObj.text;
    });
};

const header = [{ text: `--name-- (--pronoun--)
--email--
--companyName--
--companyAddress--
--greeting-- --hiringManager--,` }];

const sincerely = [{ text: `--sincerely--,
--name--` }];

module.exports = { mashIt, header, sincerely };
