const Course = require('./../models/course');

exports.all = ((req, res) => {
  Course.find()
        .then(courses => res.status(200).json(courses))
        .catch(err => res.status(400).json({ message: err.message }));
});

exports.get = ((req, res, next) => {
  Course.findOne({ _id: req.params.id })
      .then(course => res.status(200).json(course))
      .catch(error => res.status(404).json({ message: error.message }));
  });
