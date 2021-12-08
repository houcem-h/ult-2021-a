const express = require('express');

const app = express();

app.use((req, res) => {
  res.json('This is the new server response using Express.js !');
});

module.exports = app;
