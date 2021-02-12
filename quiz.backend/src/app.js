const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse JSON requests
app.use(bodyParser.json());

app.use(require('./common/middleware/cors'));

app.use(require('./routes'));
app.use(require('./common/middleware/errorResponse'));

module.exports = app;
