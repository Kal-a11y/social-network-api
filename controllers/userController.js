const { User } = require('../models');

module.exports = {
    //Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'Error with getUsers route.',
                err,
            })
        }
    },
    //Get one user by id
    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v')
                .populate({ path: 'friends' })

        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'Error with getOneUser route.',
                err,
            })
        }
    }
}