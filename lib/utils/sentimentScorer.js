const Sentiment = require('sentiment');
// no need to instantiate this each time
const sentiment = new Sentiment();

const sentimentScorer = (coverLetterArr) => {
    // iterate through all cover letters
    // if the the score is better that the previous high score
    // return the latest cover letter
    // otherwise return the old cover letter
    return coverLetterArr.reduce((acc, letter) => {
        const score = sentiment.analyze(coverLetter);
        if(!acc.score || score > acc.score) return { letter, score };

        return acc;
    }, {});
};

module.exports = sentimentScorer;
