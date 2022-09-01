//* Dependencias
const express = require('express')
const passport = require('passport')
require('./middleware/auth.middleware')(passport) // ? esta importacion hace que se ejecute directamente y no que se guarde en una variable

//*Archivos de rutas
const userRouter = require('./users/users.router').router
const authRouter = require('./auth/auth.router').router
const postRouter = require('./posts/posts.router').router


//* Configuraciones iniciales
const app = express()


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'All ok!'})
})


app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/posts', postRouter)


app.listen(8000, () => {
    console.log('Server started at port 8000')
})

exports.default = app
module.exports = app
exports.app = app
