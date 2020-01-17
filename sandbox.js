require('dotenv').config();
require('./lib/utils/connect')();
const seed = require('./lib/helpers/seed');

seed();
