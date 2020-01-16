require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const UserAnswer = require('../models/UserAnswer');
const CoverLetter = require('../models/CoverLetter');

describe('coverLetter routes', () => {
    beforeAll(() => {
        connect();
    });

    beforeEach(() => {
        return mongoose.connection.dropDatabase();
    });

    afterAll(() => {
        return mongoose.connection.close();
    });

    it('should create a coverLetter', () => {

    });

    it('should get a cover letter', async() => {
        const coverLetter = await CoverLetter.create({
            header: 'Baby Yoda',
            intro: 'Hi there',
            body1: 'One body one mind',
            body2: 'Many bodies one mind',
            conclusion: 'By Bye',
            sincerely: 'sincerely'
        });
        const 
    });
});