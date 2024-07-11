const validateBody = (request, response, next) => {
	const { body } = request

	if(body.typePerson === 'physicalPerson') {
		if(body.name === undefined) {
			return response.status(400).json({message: "O campo Nome é obrigatório."})
		} 
	
		if(body.name === '') {
			return response.status(400).json({message: "O campo Nome não pode ser vazio."})
		}

		if(body.cpf === undefined) {
			return response.status(400).json({message: "O campo CPF é obrigatório."})
		} 
	
		if(body.cpf === '') {
			return response.status(400).json({message: "O campo CPF não pode ser vazio."})
		}

		if(body.dateBirth === undefined) {
			return response.status(400).json({message: "O campo Data de Nascimento é obrigatório."})
		} 
	
		if(body.dateBirth === '') {
			return response.status(400).json({message: "O campo Data de Nascimento não pode ser vazio."})
		}
	}

	if(body.typePerson === 'legalPerson') {
		if(body.corporateReason === undefined) {
			return response.status(400).json({message: "O campo Razão Social é obrigatório."})
		} 
	
		if(body.corporateReason === '') {
			return response.status(400).json({message: "O campo Razão Social não pode ser vazio."})
		}

		if(body.cnpj === undefined) {
			return response.status(400).json({message: "O campo CNPJ é obrigatório."})
		} 
	
		if(body.cnpj === '') {
			return response.status(400).json({message: "O campo CNPJ não pode ser vazio."})
		}

		if(body.openingDate === undefined) {
			return response.status(400).json({message: "O campo Data de Abertura é obrigatório."})
		} 
	
		if(body.openingDate === '') {
			return response.status(400).json({message: "O campo Data de Abertura não pode ser vazio."})
		}
	}

	if(body.email === undefined) {
		return response.status(400).json({message: "O campo Email é obrigatório."})
	} 

	if(body.email === '') {
		return response.status(400).json({message: "O campo Email não pode ser vazio."})
	}

	if(body.password === undefined) {
		return response.status(400).json({message: "O campo Senha é obrigatório."})
	} 

	if(body.password === '') {
		return response.status(400).json({message: "O campo Senha não pode ser vazio."})
	}

	if(body.tel === undefined) {
		return response.status(400).json({message: "O campo Telefone é obrigatório."})
	} 

	if(body.tel === '') {
		return response.status(400).json({message: "O campo Telefone não pode ser vazio."})
	}

	next()
}

module.exports = {
	validateBody
}