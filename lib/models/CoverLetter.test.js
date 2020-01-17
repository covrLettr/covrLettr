const CoverLetter = require('./CoverLetter');


describe('CoverLetter model', () => {

    it('has userAnswer ID ', async() => {

        const coverLetter = new CoverLetter({
            intro: 'something',
            body1: ['something'],
            body2: ['something'],
            conclusion: ['something'],
            sincerely: 'something',
        });
  
        const { errors } = coverLetter.validateSync();
        expect(errors['userAnswerId'].message).toEqual('Path `userAnswerId` is required.');
    });

    it('testing intro ', () => {
        const coverLetter = new CoverLetter({
            userAnswerId: 'something',
            header: ['something'],
            body1: ['something'],
            body2: ['something'],
            conclusion: ['something'],
            sincerely: ['something'],
        });
  
        const { errors } = coverLetter.validateSync();
        
        expect(errors.userAnswerId.message).toEqual('Cast to ObjectID failed for value "something" at path "userAnswerId"');
    });


    it('testing header ', () => {
        const coverLetter = new CoverLetter({
            userAnswerId: 'something',
            intro: ['something'],
            body1: ['something'],
            body2: ['something'],
            conclusion: ['something'],
            sincerely: ['something'],
        });
  
        const { errors } = coverLetter.validateSync();
      
        expect(errors.userAnswerId.message).toEqual('Cast to ObjectID failed for value "something" at path "userAnswerId"');
    });


    it('testing body1 ', () => {
        const coverLetter = new CoverLetter({
            userAnswerId: 'something',
            intro: ['something'],
            header: ['something'],
            body2: ['something'],
            conclusion: ['something'],
            sincerely: ['something'],
        });
  
        const { errors } = coverLetter.validateSync();
     
        expect(errors.userAnswerId.message).toEqual('Cast to ObjectID failed for value "something" at path "userAnswerId"');
    });


    it('testing body2 ', () => {
        const coverLetter = new CoverLetter({
            userAnswerId: 'something',
            intro: ['something'],
            body1: ['something'],
            header: ['something'],
            conclusion: ['something'],
            sincerely: ['something'],
        });
  
        const { errors } = coverLetter.validateSync();
     
        expect(errors.userAnswerId.message).toEqual('Cast to ObjectID failed for value "something" at path "userAnswerId"');
    });

    it('testing conclusion ', () => {
        const coverLetter = new CoverLetter({
            userAnswerId: 'something',
            intro: ['something'],
            body1: ['something'],
            body2: ['something'],
            header: ['something'],
            sincerely: ['something'],
        });
  
        const { errors } = coverLetter.validateSync();
     
        expect(errors.userAnswerId.message).toEqual('Cast to ObjectID failed for value "something" at path "userAnswerId"');
    });

    it('testing sincerely ', () => {
        const coverLetter = new CoverLetter({
            userAnswerId: 'something',
            intro: ['something'],    
            header: ['something'],
            body1: ['something'],
            body2: ['something'],
            conclusion: ['something'],
        });
  
        const { errors } = coverLetter.validateSync();
     
        expect(errors.userAnswerId.message).toEqual('Cast to ObjectID failed for value "something" at path "userAnswerId"');
    });


});
