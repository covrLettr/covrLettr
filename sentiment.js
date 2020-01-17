// practice file for npm package 
// need to export before can import 
const populatedBody1 = require('./lib/models/CoverLetter'); 

let Sentiment = require('sentiment');
let sentiment = new Sentiment();



let result = sentiment.analyze(populatedBody1);
console.log(result); 

