const { getSentence, getSentences } = require('../lib/helpers/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('sentence routes', () => {
    it('should create a new instance of a sentence', async() => {
        return request(app)
        .post('/api/v1/sentences')
        .send({
            paragraph: 'conclusion',
            position: 0,
            text: 'Lets be amazing together.'
        })
        .then(res => {
            expect(res.body).toEqual({
                _id: expect.any(String),paragraph: 'conclusion',
                position: 0,
                text: 'Lets be amazing together.',
                __v: 0
            });
        })
    })

    it('should get all sentences', async() => {
        const sentences = await getSentences();

        return request(app)
        .get('/api/v1/sentences')
        .then(res => {
            sentences.forEach(sentence => {
                expect(res.body).toContainEqual(sentence)
            })
        })
    })

    it('should get a sentence by id', async() => {
        const sentence = await getSentence();

        return request(app)
        .get(`/api/v1/sentences/${sentence._id}`)
        .then(res => {
            expect(res.body).toEqual(sentence)
        })
    })

    it('should update a sentence by id', async() => {
        const sentence = await getSentence();

        return request(app)
        .patch(`/api/v1/sentences/${sentence._id}`)
        .send({ text: 'Better sentence.' })
        .then(res => {
            expect(res.body).toEqual({
                _id: sentence._id,
                paragraph: sentence.paragraph,
                position: sentence.position,
                text: 'Better sentence.',
                __v: sentence.__v
            })
        })
    })

    it('should delete a sentence by id', async() => {
        const sentence = await getSentence();

        return request(app)
            .delete(`/api/v1/sentences/${sentence._id}`)
            .then(res => {
                expect(res.body).toEqual(sentence)
            })
    })
})