export const formTypes = {
	fullName: {
		regex: /^(?!.*\b[A-Za-zÀ-ÖØ-öø-ÿ]+\b.*\b[A-Za-zÀ-ÖØ-öø-ÿ]+\b.*\b[A-Za-zÀ-ÖØ-öø-ÿ]+\b)(?!.*\s{2,})[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)+$/,
		message: "Preencha seu nome completo."
	},
	email: {
		regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
		message: "Preencha um e-mail válido."
	},
	password: {
		regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
		message: "A senha precisa ter uma caracter maísculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres."
	},
	date: {
		regex: /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(19\d{2}|20\d{2})$/,
		message: 'Preencha uma data válida.'
	},
	cpf: {
		message: "CPF inválido."
	},
	cnpj: {
		message: "CNPJ inválido."
	},
	telephone: {
		regex: /^\d{11}$/,
		message: "Preencha um telefone válido"
	}
}