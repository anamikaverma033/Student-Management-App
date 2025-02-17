const express = require('express');

const {
    HandlerCreateNewStudent,
    HandlerGetAllStudent,
    HandlerGetById,
    HandlerGetByCourseId,
    HandlerUpdateById,
    HandlerDeleteById
} = require('../Controllers/Student');

const router = express.Router();

router.post('/',HandlerCreateNewStudent);

router.get('/',HandlerGetAllStudent);

router.get('/:id',HandlerGetById)
router.get('/course/:id',HandlerGetByCourseId)
router.route('/:id')
            .put(HandlerUpdateById)
            .delete(HandlerDeleteById);

module.exports = router;