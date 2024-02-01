const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {usernamesData, emailsData, thoughtsData, getFriendsList} = require('./data');

const dataAmount = 5;
const friendAmount = 3;

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('✅ Seed connection success...')

    //Delete previous collections
    let userCollections = await connection.db.listCollections({name: 'user'}).toArray();
    if (userCollections){
        await connection.dropCollection('user');
    }

    let thoughtCollections = await connection.db.listCollections({name: 'thought'}).toArray();
    if (thoughtCollections){
        await connection.dropCollection('thought');
    }

    //Create dataAmount of users and thought
    const user = [];
    const thought = [];
    for (let i = 0; i < dataAmount; i++){

        users.push({
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