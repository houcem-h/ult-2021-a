const Course = require('./../models/course');

// get all courses
exports.all = ((req, res) => {
  Course.find()
        .then(courses => res.status(200).json(courses))
        .catch(err => res.status(400).json({ message: err.message }));
});

// get a course by id
exports.get = ((req, res, next) => {
  Course.findOne({ _id: req.params.id })
      .then(course => res.status(200).json(course))
      .catch(error => res.status(404).json({ message: error.message }));
  });

// store a new course
exports.create = (req, res, next) => {
  const course = new Course({
    ...req.body
  });
  course.save()
    .then(() => res.status(201).json({ message: 'Course created  !'}))
    .catch(error => res.status(400).json({ error }));
}
