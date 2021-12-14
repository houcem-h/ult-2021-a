const express = require('express');
const router = express.Router();

const courseController = require('./../controllers/course');

router.get('/', courseController.all);
router.get('/:id', courseController.get);
router.post('/', courseController.create);

module.exports = router;
