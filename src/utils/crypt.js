const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
    // ? regresa password hasheada
}

const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
    // ? regresa true o false
}

module.exports = {
    hashPassword,
    comparePassword
}