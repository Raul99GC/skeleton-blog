const router = require('express').Router()
const passport = require('passport')
require('../middleware/auth.middleware')(passport)

const postServices = require('./posts.http')

router.route('/')
    .get(postServices.getAll)
    .post(postServices.createNew)

router.route('/:id')
    .get(postServices.getById)




exports.router = router