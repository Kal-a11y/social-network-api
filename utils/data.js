const usernamesData = [
    'user123',
    'cool_dude42',
    'awesome_gamer',
    'coding_ninja',
    'web_dev007',
    'superstar99',
    'tech_geek123',
    'java_master',
    'code_wizard',
    'js_ninja42'
];

const emailsData = [
    'johnsmith1@mail.com',
    'janedoe2@mail.com',
    'mikejones3@mail.com',
    'emilyparker4@mail.com',
    'alexwilson5@mail.com',
    'sarathompson6@mail.com',
    'davidclark7@mail.com',
    'oliviabrown8@mail.com',
    'chrisevans9@mail.com',
    'lisataylor10@mail.com'
];

const thoughtsData = [
    "Just had the best coffee ever! ☕️ #coffeeaddict #morningvibes",
    "Weekend vibes! 🌴☀️ #weekendgetaway #relaxation",
    "New recipe alert! Check out my latest creation 🍽️👩‍🍳 #foodie #yum",
    "Excited to start my new project today! 💼✨ #motivated #goals",
    "Sunset views are the best! 🌅😍 #naturelovers #serenity",
    "Throwback to last summer's adventures! 🌊🏄‍♂️ #memories #goodtimes",
    "Movie night with friends! 🍿🎬 #movienight #popcorn",
    "Loving my new haircut! 💇‍♀️💕 #freshlook #confidenceboost",
    "Work hard, play hard! 💪🎉 #balance #success",
    "Feeling grateful for the little things in life. 🙏❤️ #gratitude #blessed"
];

// Get a User
const getFriendsList = (friendAmount) => {
    const friendsData = [];

    for (let index = 0; index < friendAmount; index++) {
        const randomUser =  usernamesData[Math.floor(Math.random() * usernamesData.length)];
        
        friendsData.push(randomUser)
    }

    return friendsData;
   
}


module.exports = { usernamesData, emailsData, thoughtsData, getFriendsList };