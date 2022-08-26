const uuid = require('uuid')


const userDB = [{
    "id": "7a1e9631-6c61-4d7b-9725-a4821f6f97bf",
    "first_name": "Raul",
    "last_name": "Cordoba",
    "email": "raulcg@academlo.com",
    "phone": "1234567890",
    "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    "phone": "1234567890",
    "birthday_date": "22/10/2000",
    "rol": "admin",
    "profile_image": "",
    "country": "mexico",
    "is_active": true,
    "verified": false
},
{ 
    "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    "first_name": "Sahid",
    "last_name": "Kick",
    "email": "sahid.kick@academlo.com",
    "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    "phone": "1234567890",
    "birthday_date": "22/10/2000",
    "rol": "normal",
    "profile_image": "",
    "country": "mexico",
    "is_active": true,
    "verified": false
}]

const getAllUsers = () => {
    return userDB
    //? select * from users;
}

const getUserById = (id) => {
    const data = userDB.filter((user) => user.id === id)
    return data.length ? data[0] : false
}

const createNewUser = (data) => {
    const newUser = {

    }
}