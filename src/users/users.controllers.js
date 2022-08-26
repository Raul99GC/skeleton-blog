const uuid = require('uuid')
const {hashPassword} = require('../utils/crypt')

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
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        emal: data.email,
        password: hashPassword(data.password),
        phone: data.phone ? data.phone : "", //unico
        birthday_date: data.birthday_date,
        rol: 'normal',
        profile_image: data.profile_image ? data.profile_image : '',
        country: data.country,
        is_active: true,
        verified: false
    }
    userDB.push(newUser)
    return newUser
}

const editUser = (id, data) => {
    const index = userDB.findIndex((user) => user.id === id)
    if (index !== -1) {
        userDB[index] ={ 
            id: id,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: userDB[index].password,
            phone: data.phone, //unico
            birthday_date: data.birthday_date,
            rol: data.rol,
            profile_image: data.profile_image,
            country: data.country,
            is_active: data.is_active,
            verified: false,
        }
        return userDB[index]
    } else {
        const newUser = {
            id: id,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: userDB[index].password,
            phone: data.phone, //unico
            birthday_date: data.birthday_date,
            rol: data.rol,
            profile_image: data.profile_image,
            country: data.country,
            is_active: data.is_active,
            verified: false,
        }
        return createNewUser(newUser)
    }
}

const deleteUser = (id) => {
    const index = userDB.findIndex((user) => user.id === id )
    if(index !== -1) {
        userDB.splice(index, 1)
        return true
    } else {
        return false
    }
}

const getUserByEmail = (email) => {
    const data = userDB.filter((user) => user.email === email)
    return data.length ? data[0] : false
}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    editUser,
    deleteUser,
    getUserByEmail
}