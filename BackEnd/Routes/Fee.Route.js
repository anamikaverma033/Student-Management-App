const express = require('express');

const { HandlerCreateNewFee,
        HandlerGetAllFee,
        HandlerGetById,
        HandlerUpdateById,
        HandlerDeleteById } = require('../Controllers/Fee');

const router = express.Router();

router.post('/',HandlerCreateNewFee);
router.get('/',HandlerGetAllFee);
router.route('/:id')
      .get(HandlerGetById)
      .put(HandlerUpdateById)
      .delete(HandlerDeleteById);

module.exports  = router;
