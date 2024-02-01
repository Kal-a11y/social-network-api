const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {usernamesData, emailsData, thoughtsData, getFriendsList} = require('./data');

const dataAmount = 5;
const friendAmount = 3;

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('✅ Seed connection success...')

    //Delete previous collections
    let userCollections = await User.exists();
    if (userCollections){
        await User.deleteMany();
    }

    let thoughtCollections = await Thought.exists();
    if (thoughtCollections){
        await Thought.deleteMany();
    }

    //Create dataAmount of users and thought
    const user = [];
    const thought = [];
    for (let i = 0; i < dataAmount; i++){

        user.push({
            username: usernamesData[i],
            email: emailsData[i],
            thoughts: thoughtsData[i],
            friends: [...getFriendsList(friendAmount)]
        })
        thought.push({
            thoughtText: thoughtsData[i],
            username: usernamesData[i],
        })
    }

    await User.collection.insertMany(user);
    await Thought.collection.insertMany(thought);
    console.table(user);
    console.table(thought);

    process.exit(0);
});