const express = require('express')
const userController = require('./controller/userController')

const router = express.Router()

router.post('/registration', userController.createUser)

module.exports = router