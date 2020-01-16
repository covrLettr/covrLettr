const CoverLetter = require('./CoverLetter');

describe('CoverLetter model', () => {
    it('should have a header', () => {
        const coverLetter = new CoverLetter();
        const { errors } = coverLetter.validateSync();
        expect(errors.sincerely.message).toEqual('Path `sincerely` is required.');
    });
})
;
