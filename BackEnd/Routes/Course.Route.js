const express = require('express');

const { HandlerCreateNewCourse,
        HandlerGetAllCourse,
        HandlerGetById,
        HandlerUpdateById,
        HandlerDeleteById
} = require('../Controllers/Course');

const router = express.Router();

router.post('/',HandlerCreateNewCourse);
router.get('/',HandlerGetAllCourse);
router.route('/:id')
      .get(HandlerGetById)
      .put(HandlerUpdateById)
      .delete(HandlerDeleteById)
      
module.exports = router;