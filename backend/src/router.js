const express = require('express')
const userController = require('./controller/userController')
const userMiddleware = require('./middleware/userMiddleware')

const router = express.Router()

router.post('/registration', userMiddleware.validateBody, userController.createUser)

module.exports = router