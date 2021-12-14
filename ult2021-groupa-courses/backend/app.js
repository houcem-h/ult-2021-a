const express = require('express');
const mongoose = require('mongoose');
const Course = require('./models/course');

const app = express();

mongoose.connect('mongodb://localhost:27017/ult2021-ga',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get('/api/courses', (req, res) => {
  Course.find()
        .then(courses => res.status(200).json(courses))
        .catch(err => res.status(400).json({ message: err.message }));
});

app.get('/api/courses/:id', (req, res, next) => {
  Course.findOne({ _id: req.params.id })
      .then(course => res.status(200).json(course))
      .catch(error => res.status(404).json({ error }));
  });

module.exports = app;
