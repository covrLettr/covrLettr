require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../utils/connect');
const seed = require('./seed');
const UserAnswer = require('../models/UserAnswer');

beforeAll(() => {
    connect();
});

beforeEach(() => {
    return mongoose.connection.dropDatabase();
});

beforeEach(() => {
    return seed({ userAnswers: 3 });
});

afterAll(() => {
    return mongoose.connection.close();
});

const prepare = doc => JSON.parse(JSON.stringify(doc));

const createGetters = Model => {
    const modelName = Model.modelName;

    return {
        [`get${modelName}`]: (query) => Model.findOne(query).then(prepare),
        [`get${modelName}s`]: (query) => Model.find(query).then(docs => docs.map(prepare))
    };
};

module.exports = {
    ...createGetters(UserAnswer)
};
