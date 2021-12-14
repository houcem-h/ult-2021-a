const express = require('express');
const router = express.Router();

const courseController = require('./../controllers/course');

router.get('/', courseController.all);
router.get('/:id', courseController.get);

module.exports = router;
