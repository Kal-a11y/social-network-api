const { Schema, model, default: mongoose } = require('mongoose');
const dayjs = require('dayjs');

const formatDate = (date) => {
    return date.format('ddd, MMM D, YYYY [at] hh:mm:ss a');
}

const reactionSchema = new Schema({
    reactionId: {
        type: mongoose.ObjectId,
        default: mongoose.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: dayjs(),
        get: formatDate,
    }
})



module.exports = reactionSchema;