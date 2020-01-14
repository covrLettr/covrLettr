const { getUserAnswer, getUserAnswers } = require('../lib/helpers/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
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
                whyCustomerMatters: 'they drink liquor',
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
                    whyCustomerMatters: 'they drink liquor',
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
                });
            });
    });

    it('should get all user answers', async() => {
        await getUserAnswers();

        return request(app)
            .get('/api/v1/userAnswers')
            .then(res => {
                res.body.forEach(answerList => {
                    expect(answerList).toEqual({
                        _id: expect.any(String),
                        name: expect.any(String),
                        pronoun: 'they/them',
                        email: expect.any(String),
                        phone: expect.any(String),
                        address: expect.any(String),
                        companyName: expect.any(String),
                        companyAddress: expect.any(String),
                        hiringManager: expect.any(String),
                        companyMission: expect.any(String),
                        jobKeyword1: expect.any(String),
                        jobKeyword2: expect.any(String),
                        jobKeyword3: expect.any(String),
                        passion1: expect.any(String),
                        passion2: expect.any(String),
                        passion3: expect.any(String),
                        positionTitle: expect.any(String),
                        value1: expect.any(String),
                        value2: expect.any(String),
                        value3: expect.any(String),
                        companyCustomer: expect.any(String),
                        whyCustomerMatters: expect.any(String),
                        companyMotivatesMeTo: expect.any(String),
                        opportunitiesTheEmployerProvides1: expect.any(String),
                        opportunitiesTheEmployerProvides2: expect.any(String),
                        techLanguage1: expect.any(String),
                        techLanguage2: expect.any(String),
                        techLanguage3: expect.any(String),
                        techLanguage4: expect.any(String),
                        pastExperience: expect.any(String),
                        skillJobDescription1: expect.any(String),
                        skillJobDescription2: expect.any(String),
                        skillJobDescription3: expect.any(String),
                        mainResponsibilityAtOldJob: expect.any(String),
                        pastAccomplishment1: expect.any(String),
                        pastAccomplishment2: expect.any(String),
                        excitedToDo: expect.any(String),
                        greeting: 'Dear',
                        sincerely: 'Sincerely',
                        __v: 0
                    });
                });
            });
    });

    it('should get an answer by id', async() => {
        const answer = await getUserAnswer();

        return request(app)
            .get(`/api/v1/userAnswers/${answer._id}`)
            .then(res => {
                expect(res.body).toEqual({
                    _id: expect.any(String),
                    name: expect.any(String),
                    pronoun: 'they/them',
                    email: expect.any(String),
                    phone: expect.any(String),
                    address: expect.any(String),
                    companyName: expect.any(String),
                    companyAddress: expect.any(String),
                    hiringManager: expect.any(String),
                    companyMission: expect.any(String),
                    jobKeyword1: expect.any(String),
                    jobKeyword2: expect.any(String),
                    jobKeyword3: expect.any(String),
                    passion1: expect.any(String),
                    passion2: expect.any(String),
                    passion3: expect.any(String),
                    positionTitle: expect.any(String),
                    value1: expect.any(String),
                    value2: expect.any(String),
                    value3: expect.any(String),
                    companyCustomer: expect.any(String),
                    whyCustomerMatters: expect.any(String),
                    companyMotivatesMeTo: expect.any(String),
                    opportunitiesTheEmployerProvides1: expect.any(String),
                    opportunitiesTheEmployerProvides2: expect.any(String),
                    techLanguage1: expect.any(String),
                    techLanguage2: expect.any(String),
                    techLanguage3: expect.any(String),
                    techLanguage4: expect.any(String),
                    pastExperience: expect.any(String),
                    skillJobDescription1: expect.any(String),
                    skillJobDescription2: expect.any(String),
                    skillJobDescription3: expect.any(String),
                    mainResponsibilityAtOldJob: expect.any(String),
                    pastAccomplishment1: expect.any(String),
                    pastAccomplishment2: expect.any(String),
                    excitedToDo: expect.any(String),
                    greeting: 'Dear',
                    sincerely: 'Sincerely',
                    __v: 0
                });
            });
    });
});
