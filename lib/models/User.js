const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash:{ 
        type: String,
        required: true
    },
}, {
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            delete ret.passwordHash;
        }
    }
});

schema.virtual('coverLetters', {
    localField: '_id',
    foreignField: 'userId',
    ref: 'CoverLetter'
});

schema.virtual('password').set(function(password) {
    this.passwordHash = bcrypt.hashSync(password, 14);
});

schema.statics.authorize = async function({ email, password }) {
    const user = await this.findOne({ email });
    if(!user) {
        const err = new Error('Invalid Email/Password');
        err.status = 401;
        throw err;
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if(!validPassword) {
        const err = new Error('Invalid Email/Password');
        err.status = 401;
        throw err;
    }
    return user;
};

module.exports = mongoose.model('User', schema);
