import { ref } from "vue"
import { cpfValid } from "@/js/helpers/cpfValidate"
import { cnpjValid } from "@/js/helpers/cnpjValidate"
import { dateValidade } from "@/js/helpers/dateValidate"
import { formTypes } from "@/js/helpers/formTypes"

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
				error.value = formTypes[type].message
				return false
			}
		}

		if(type === 'cnpj') {
			if(cnpjValid(data)) {
				error.value = null
				return true
			} else {
				error.value = formTypes[type].message
				return false
			}
		}

		if(type === 'date') {
			if(dateValidade(data)) {
				error.value = null
				return true
			} else {
				error.value = formTypes[type].message
				return false
			}
		}

		if (data.length === 0) {
			error.value = "Preencha um valor"
			return false
		} else if (formTypes[type] && !formTypes[type].regex.test(data)) {
			error.value = formTypes[type].message
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