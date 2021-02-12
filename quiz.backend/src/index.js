require('dotenv').config();

const app = require('./app');

const APP_PORT = process.env.APP_PORT || 8000;

// eslint-disable-next-line no-console
app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`));