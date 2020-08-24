const express = require('express');
const app = express();
require('./models/Sentence');

app.use(express.json());
app.use(require('cookie-parser')());
app.use(require('cors')({
  origin: true,
  credentials: true
}));


app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/userAnswers', require('./routes/userAnswers'));
app.use('/api/v1/coverLetters', require('./routes/coverLetters'));
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/sentences', require('./routes/sentences'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));


module.exports = app;
