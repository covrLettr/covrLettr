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

    console.log('the', the);
    
    the.map(item => {
        if(item){
            return item.filter(indItem => indItem !== ',');
        }
    });

    return the;
    // return the;
    // const fieldsArr = sentence.match(myRegex).map(i => i.match(innerTextRegex)).flat;
    // return fieldsArr;
};

module.exports = mashIt;
