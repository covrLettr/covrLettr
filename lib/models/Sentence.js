const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    paragraph: {
        type: String,
        required: true,
        enum: ['intro', 'body1', 'body2', 'conclusion']
    },
    position: {
        type: Number,
        required: true,
        max: 3
    },
    text: {
        type: String,
        required: true
    }
});

schema.statics.getRandom = function(paragraphName, numOfSentences) {
    return Promise.all([...Array(numOfSentences)].map((_, position) => {
        return this.aggregate([{
            '$match': {
                paragraph: paragraphName,
                position
            }
        }, {
            '$sample': {
                size: 1
            }
        }]);
    }))
        .then(sentences => sentences.flat());
};

module.exports = mongoose.model('Sentence', schema);
