import { ref } from "vue"
import { cpfValid } from "@/js/helpers/cpfValidate"
import { cnpjValid } from "@/js/helpers/cnpjValidate"

const types = {
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
	number: {
		regex: /\d+(\.\d*)?$/,
		message: 'Utilize apenas números.'
	},
	cpf: {
		message: "CPF inválido."
	},
	cnpj: {
		message: "CNPJ inválido."
	},
	telephone: {
		regex: /^\(\d{2}\) \d{5}-\d{4}$/,
		message: "Preencha um telefone válido"
	}
}

function useForm(type, inputData) {
	const inputValue = ref(inputData)
	const error = ref(null)

	function validate(data) {
		if (type === false) return true

		if(type === 'cpf') {
			if(cpfValid(data)) {
				error.value = null
				return true
			} else {
				error.value = types[type].message
				return false
			}
		}

		if(type === 'cnpj') {
			if(cnpjValid(data)) {
				error.value = null
				return true
			} else {
				error.value = types[type].message
				return false
			}
		}

		if (data.length === 0) {
			error.value = "Preencha um valor"
			return false
		} else if (types[type] && !types[type].regex.test(data)) {
			error.value = types[type].message
			return false
		} else {
			error.value = null
			return true
		}
	}

	return {
		inputValue,
		error,
		validate: () => validate(inputValue.value),
		onBlur: () => validate(inputValue.value)
	}
}

export default useForm