require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const UserAnswers = require('../lib/models/UserAnswers');

describe('app routes', () => {
    beforeAll(() => {
        connect();
    });

    beforeEach(() => {
        return mongoose.connection.dropDatabase();
    });

    afterAll(() => {
        return mongoose.connection.close();
    });

    it('should create a new instance of user answers', () => {
        return request(app)
        .post('/api/v1/userAnswers')
        .send({
            name: 'George',
            pronoun: 'he/him',
            email: 'funk@delics.com',
            phone:  '555-555-555',
            address: '77 the place, Here, OH',
            companyName: 'funkadelictronics',
            companyAddress: '324 funky way, There, OR',
            hiringManager: 'Billy Joel',
            companyMission: 'Hickory Dickory Dock',
            jobKeyword1: 'analyze',
            jobKeyword2: 'organize',
            jobKeyword3: 'data',
            passion1: 'data',
            passion2: 'Orangutans',
            passion3: 'Peaches',
            positionTitle: 'Boss ass dev',
            value1: 'integrity',
            value2: 'honesty',
            value3: 'gettin drunk',
            companyCustomer: 'liquor stores ONLY',
            whyCustomersMatter: 'they drink liquor',
            companyMotivatesMeTo: 'drink more liquor',
            opportunitiesTheEmployerProvides1: 'free liquor',
            opportunitiesTheEmployerProvides2: 'free mountain pass',
            techLanguage1: 'Javascript',
            techLanguage2:  'Node',
            techLanguage3: 'React',
            techLanguage4: 'Express',
            pastExperience: 'Bein a boss',
            skillJobDescription1: 'Javascript',
            skillJobDescription2: 'Intrapersonal',
            skillJobDescription3: 'Organization',
            mainResponsibilityAtOldJob: 'Fix dat stuff',
            pastAccomplishment1: 'Made a full-stack app',
            pastAccomplishment2: 'Made a back-end app',
            excitedToDo: 'Drink and program',
            greeting: 'Dear',
            sincerely: 'Sincerely'
        })
        .then(res => {
            expect(res.body).toEqual({
                _id: expect.any(String),
                name: 'George',
                pronoun: 'he/him',
                email: 'funk@delics.com',
                phone:  '555-555-555',
                address: '77 the place, Here, OH',
                companyName: 'funkadelictronics',
                companyAddress: '324 funky way, There, OR',
                hiringManager: 'Billy Joel',
                companyMission: 'Hickory Dickory Dock',
                jobKeyword1: 'analyze',
                jobKeyword2: 'organize',
                jobKeyword3: 'data',
                passion1: 'data',
                passion2: 'Orangutans',
                passion3: 'Peaches',
                positionTitle: 'Boss ass dev',
                value1: 'integrity',
                value2: 'honesty',
                value3: 'gettin drunk',
                companyCustomer: 'liquor stores ONLY',
                whyCustomersMatter: 'they drink liquor',
                companyMotivatesMeTo: 'drink more liquor',
                opportunitiesTheEmployerProvides1: 'free liquor',
                opportunitiesTheEmployerProvides2: 'free mountain pass',
                techLanguage1: 'Javascript',
                techLanguage2:  'Node',
                techLanguage3: 'React',
                techLanguage4: 'Express',
                pastExperience: 'Bein a boss',
                skillJobDescription1: 'Javascript',
                skillJobDescription2: 'Intrapersonal',
                skillJobDescription3: 'Organization',
                mainResponsibilityAtOldJob: 'Fix dat stuff',
                pastAccomplishment1: 'Made a full-stack app',
                pastAccomplishment2: 'Made a back-end app',
                excitedToDo: 'Drink and program',
                greeting: 'Dear',
                sincerely: 'Sincerely',
                __v: 0
            })
        })
    });
});
