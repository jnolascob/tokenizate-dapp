const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Node Express Boilerplate API');
});

require('./config/express')(app);
require('./config/routes')(app);

module.exports = app;
