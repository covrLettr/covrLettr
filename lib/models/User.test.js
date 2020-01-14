const User = require('./User');

describe('Sentence model', () => {

    it('should be given an name', () => {
        const user = new User();
        const { errors } = user.validateSync();
        expect(errors.name.message).toEqual('Path `name` is required.');
    });

    it('should be given email', () => {
        const user = new User();
        const { errors } = user.validateSync();
        expect(errors.email.message).toEqual('Path `email` is required.');
    });


    it('should be given password', () => {
        const user = new User();
        const { errors } = user.validateSync();
        expect(errors.passwordHash.message).toEqual('Path `passwordHash` is required.');
    });
  
  
});
