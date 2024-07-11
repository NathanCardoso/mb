const userModel = require('../models/userModel')

const createUser = async (request, response) => {
	const createdUser = await userModel.createUser(request.body)
	response.status(201).json(createdUser)
}

module.exports = {
	createUser
}