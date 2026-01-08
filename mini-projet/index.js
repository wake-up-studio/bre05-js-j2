let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];

// ******************************************************
// STEP 1
// ******************************************************

function countActiveUsers(users){
    let activeUsers = 0
    
    for(let user of users){
        if(user.isActive===true){
            activeUsers++
        }
    }
    return activeUsers
}

console.log(`We currently have ${ countActiveUsers(users) } active users.`);

// ******************************************************
// STEP 2
// ******************************************************

function getActiveUsers(users){
    let activeUsers = []
    
    for(let user of users){
        if(user.isActive===true){
            activeUsers.push(user)
        }
    }
    return activeUsers
}

function hasBlueEyes(users) {
    let blueEyes = 0
    
    for(let user of getActiveUsers(users)){
        if(user.eyeColor==="blue"){
            blueEyes++
        }
    }
    return blueEyes
}

console.log(`Out of our currently ${countActiveUsers(users)} active users, ${hasBlueEyes(users)} have blue eyes.`);


// ******************************************************
// STEP 3
// ******************************************************

function getActiveUsersAges(activeUsers) {
    let ages = []
    
    for(let user of activeUsers){
        ages.push(user.age)
    }
    return ages
}

function computeActiveUsersAverageAge(users) {
    let sum = 0
    for(let age of getActiveUsersAges(users)){
        sum = age + sum
    }
    return sum / getActiveUsersAges(users).length
} 

console.log(`Out of our currently ${countActiveUsers(users)} active users, the average age is ${computeActiveUsersAverageAge(users)}.`);

// ******************************************************
// STEP 4
// ******************************************************

function getMultronUsers(users) {
    let nbrMultron = 0
    
    for(let user of users){
        if(user.company==="MULTRON"){
            nbrMultron++
        }
    }
    return nbrMultron
}

function setMultronToCenturia(users) {
    for(let user of users){
        if(user.company==="MULTRON"){
            user.company="CENTURIA";            
        }
    }
    return users
}

console.log(`${getMultronUsers(users)} user companies have been changed from MULTRON to CENTURIA.`);

// ******************************************************
// STEP 5
// ******************************************************

function getBrownEyedUsers(users) {
    let brownEyes = []
    
    for(let user of users){
        if(user.eyeColor==="brown"){
            brownEyes.push(user)
        }
    }
    return brownEyes
}

function excludeCenturiaWorkers(users) {
    let nbr = 0
    
    for(let user of getBrownEyedUsers(users)){
        if(user.company!=="CENTURIA"){
            nbr++
        }
    }
    return nbr
}

console.log(`${excludeCenturiaWorkers(users)} users with brown eyes do not work at CENTURIA`);

// ******************************************************
// STEP 6
// ******************************************************

function brownEyesActive(users){
    let active = 0
    for(let user of getBrownEyedUsers(users)){
        if(user.isActive===true){
            active++
        }
    }
    return active
}

function brownEyesInactive(users){
    let inactive = 0
    for(let user of getBrownEyedUsers(users)){
        if(user.isActive===false){
            inactive++
        }
    }
    return inactive
}

function getGreenEyedUsers(users) {
    let greenEyes = []
    
    for(let user of users){
        if(user.eyeColor==="green"){
            greenEyes.push(user)
        }
    }
    return greenEyes
}

function greenEyesActive(users){
    let active = 0
    for(let user of getGreenEyedUsers(users)){
        if(user.isActive===true){
            active++
        }
    }
    return active
}

function greenEyesInactive(users){
    let inactive = 0
    for(let user of getGreenEyedUsers(users)){
        if(user.isActive===false){
            inactive++
        }
    }
    return inactive
}

function getBlueEyedUsers(users) {
    let blueEyes = []
    
    for(let user of users){
        if(user.eyeColor==="blue"){
            blueEyes.push(user)
        }
    }
    return blueEyes
}

function blueEyesActive(users){
    let active = 0
    for(let user of getBlueEyedUsers(users)){
        if(user.isActive===true){
            active++
        }
    }
    return active
}

function blueEyesInactive(users){
    let inactive = 0
    for(let user of getBlueEyedUsers(users)){
        if(user.isActive===false){
            inactive++
        }
    }
    return inactive
}

console.log(`Out of our brown eyed users ${brownEyesActive(users)} are active and ${brownEyesInactive(users)} are inactive`);

console.log(`Out of our green eyed users ${greenEyesActive(users)} are active and ${greenEyesInactive(users)} are inactive`);

console.log(`Out of our blue eyed users ${blueEyesActive(users)} are active and ${blueEyesInactive(users)} are inactive`);