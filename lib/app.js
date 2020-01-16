const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/userAnswers', require('./routes/userAnswers'));
app.use('/api/v1/coverLetters', require('./routes/coverLetters'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
