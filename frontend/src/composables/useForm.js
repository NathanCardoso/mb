import { ref } from "vue"

const types = {
	email: {
		regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
		message: "Preencha um e-mail válido."
	},
	password: {
		regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
		message: "A senha precisa ter uma caracter maísculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres."
	},
	number: {
		initialVariable: "0.00",
		regex: /\d+(\.\d*)?$/,
		message: 'Utilize apenas números.'
	}
}

function useForm(type) {
	const inputValue = ref(types[type].initialVariable)
	const error = ref(null)

	function validate(data) {
		if (type === false) return true
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