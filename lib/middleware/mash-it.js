const mashIt = (sentencesArr) => {
    const myRegex = /--([^-]+)--/g;
    const innerTextRegex = /([^-]+)/g;

    const it = sentencesArr.map(sentenceObj => {
        return sentenceObj.text.match(myRegex);
    });

    const the = it.map(answerKey => {
        if(answerKey) {
            return answerKey.toString().match(innerTextRegex);
        }
    });

    const grand = the.filter(p => p !== undefined);


    let toot = [];
    grand.map(item => {
        if(item) {
            toot.push(item.filter(indItem => indItem !== ','));
        }
    });

    return toot;
};

module.exports = mashIt;
