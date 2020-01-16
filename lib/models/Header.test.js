const Header = require('../models/Header');

describe('Header model', () => {
    it('should be given a name', () => {
        const header = new Header();
        const { errors } = header.validateSync();
        expect(errors.name.message).toEqual('Path `name` is required.');
    });
});
