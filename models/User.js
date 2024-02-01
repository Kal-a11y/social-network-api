const { Schema, model } = require('mongoose');

// User schema
const userSchema = new Schema(
    {
        username: { type: String, unique: true, required: true, trim: true },
        email: { type: String, unique: true, required: true, match: /\w+@\w+.w\w+/ },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCound').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;