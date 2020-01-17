const CoverLetter = require('./CoverLetter');

describe('CoverLetter model', () => {
    it('should have a sincerely', () => {
        const coverLetter = new CoverLetter();
        const { errors } = coverLetter.validateSync();
        expect(errors.sincerely.message).toEqual('Path `sincerely` is required.');
    });
})
;
