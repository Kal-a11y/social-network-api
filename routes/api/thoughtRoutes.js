const router = require('express').Router();
const { getThoughts,  getOneThought} = require('../../controllers/thoughtController')

// /api/thoughts
router.route('/')
    .get(getThoughts)

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getOneThought)
    
module.exports = router;