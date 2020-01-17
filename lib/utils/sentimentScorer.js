const Sentiment = require('sentiment');
const sentimentScorer = (coverLetterArr) => {
    let sentiment = new Sentiment();
    const scoreArr  = [];
    coverLetterArr.forEach(coverLetter => {
        let result = sentiment.analyze(coverLetter);
        scoreArr.push(result.score);
    });

    console.log({ HIGHSCOREINDEX: scoreArr.reduce((acc, curr, ind, arr) => curr > arr[acc] ? ind : acc, 0) });

    console.log({ SCORES: scoreArr });
    
    return scoreArr.reduce((acc, curr, ind, arr) => curr > arr[acc] ? ind : acc, 0);
};

module.exports = sentimentScorer;
