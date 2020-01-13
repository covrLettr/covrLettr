const Sentence = require('./Sentence');

describe('Sentence model', () => {

    it('should be given an paragraph', () => {
        const sentence = new Sentence();
        const { errors } = sentence.validateSync();
        expect(errors.paragraph.message).toEqual('Path `paragraph` is required.');
    });

    it('should be given position', () => {
        const sentence = new Sentence();
        const { errors } = sentence.validateSync();
        expect(errors.position.message).toEqual('Path `position` is required.');
    });

    it('should be given text', () => {
        const sentence = new Sentence();
        const { errors } = sentence.validateSync();
        expect(errors.text.message).toEqual('Path `text` is required.');
    });
  
  
});
