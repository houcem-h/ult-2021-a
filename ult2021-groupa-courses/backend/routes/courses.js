const express = require('express');
const router = express.Router();

const Course = require('./../models/course');

router.get('/', (req, res) => {
  Course.find()
        .then(courses => res.status(200).json(courses))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.get('/:id', (req, res, next) => {
  Course.findOne({ _id: req.params.id })
      .then(course => res.status(200).json(course))
      .catch(error => res.status(404).json({ message: error.message }));
  });

module.exports = router;
