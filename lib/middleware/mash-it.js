const mashIt = (sentencesArr) => {
    const myRegex = /--([^-]+)--/g;
    const innerTextRegex = /([^-]+)/g;

    const answerFieldWithDashes = sentencesArr.map(sentenceObj => {
        const str = sentenceObj.text;
        console.log(Array.from(str.matchAll(myRegex), m => m[0]));
        
        // const matches = str.matchAll(myRegex);
        // for(const match in matches){
        //     console.log(match[0]);
        // }

        return sentenceObj.text.match(myRegex);
    });
    
    const noMoreDashes = answerFieldWithDashes.map(answerKey => {
        if(answerKey) {
            return answerKey.toString().match(innerTextRegex);
        }
    });

    const noMoreUndefined = noMoreDashes.filter(p => p !== undefined);

    let pulledAnswerFields = [];
    noMoreUndefined.map(item => {
        if(item) {
            pulledAnswerFields.push(item.filter(indItem => indItem !== ','));
        }
    });

    // let currentFoundField = 
    // pulledAnswerFields.forEach(innerArr => {
    //     currentFoundField[0]
    // });

    // sentencesArr.map(sentObj => {
    //     sentObj.text = sentObj.text.replace(myRegex, )
        
    // });
    
    return pulledAnswerFields;
};
