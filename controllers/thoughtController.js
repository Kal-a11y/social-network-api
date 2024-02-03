const { Thought } = require('../models');

module.exports = {
    //Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'Error with getThoughts route.',
                err,
            })
        }
    },
    //Get one thought by id
    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v')
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'Error with getOneThought route.',
                err,
            })
        }
    }
}