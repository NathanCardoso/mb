<template>
  <TheInput
    input-name="Endereço de Email"
    input-type="email"
    input-id="email"
    input-validate="email"
    :input-data="inputData.email"
    @input:status="inputValidate('email', $event)"
    @input:value="inputValue('email', $event)"
  />
  <template v-if="isPhysicalPerson">
    <TheInput
      input-name="Nome"
      input-id="name"
      input-validate="fullName"
      :input-data="inputData.name"
      @input:status="inputValidate('fullName', $event)"
      @input:value="inputValue('name', $event)"
    />
    <TheInput
      input-name="CPF"
      input-id="cpf"
      input-validate="cpf"
      :input-data="inputData.cpf"
      @input:status="inputValidate('cpf', $event)"
      @input:value="inputValue('cpf', $event)"
    />
    <TheInput
      input-type="date"
      input-name="Data de nascimento"
      input-id="date-of-birth"
      input-validate="date"
      :input-data="inputData.date"
      @input:status="inputValidate('date', $event)"
      @input:value="inputValue('dateBirth', $event)"
    />
  </template>
  <template v-else>
    <TheInput
      input-name="Razão Social"
      input-id="name"
      input-validate="fullName"
      :input-data="inputData.corporateReason"
      @input:status="inputValidate('fullName', $event)"
      @input:value="inputValue('corporateReason', $event)"
    />
    <TheInput
      input-name="CNPJ"
      input-id="cnpj"
      input-validate="cnpj"
      :input-data="inputData.cnpj"
      @input:status="inputValidate('cnpj', $event)"
      @input:value="inputValue('cnpj', $event)"
    />
    <TheInput
      input-type="date"
      input-name="Data de abertura"
      input-id="opening-date"
      input-validate="date"
      :input-data="inputData.date"
      @input:status="inputValidate('date', $event)"
      @input:value="inputValue('openingDate', $event)"
    />
  </template>
  <TheInput
    input-type="tel"
    input-name="Telefone"
    input-id="telephone"
    input-validate="telephone"
    :input-max-length="9"
    :input-data="inputData.tel"
    @input:status="inputValidate('tel', $event)"
    @input:value="inputValue('tel', $event)"
  />
  <TheInput
    input-name="Senha"
    input-id="password"
    input-validate="password"
    :input-data="inputData.password"
    @input:status="inputValidate('password', $event)"
    @input:value="inputValue('password', $event)"
  />
</template>

<script setup>
import TheInput from "../atoms/TheInput.vue";
import { ref, computed, watch, nextTick } from "vue";

const props = defineProps({
  inputData: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(["input:value", "input:status"]);

const inputDataLocal = ref({});
const isEmailValid = ref(false);
const isFullNameValid = ref(false);
const isCorporateReasonValid = ref(false);
const isDateBirthValid = ref(false);
const isOpeningDateValid = ref(false);
const isCpfValid = ref(false);
const isCnpjValid = ref(false);
const isTelephoneValid = ref(false);
const isPasswordValid = ref(false);

const isPhysicalPerson = computed(
  () => inputDataLocal.value.typePerson === "physicalPerson"
);

watch(
  () => isEmailValid.value && isFullNameValid.value,
  (status) => emit("input:status", status)
);

watch(
  () =>
    isEmailValid.value &&
    isCorporateReasonValid.value &&
    isOpeningDateValid.value &&
    isCnpjValid.value &&
    isTelephoneValid.value &&
    isPasswordValid.value,
  (status) => {
    emit("input:status", status);
  }
);

const inputValidate = (input, status) => {
  switch (input) {
    case "email":
      isEmailValid.value = status;
      break;
    case "fullName":
      isFullNameValid.value = status;
      break;
    case "corporateReason":
      isCorporateReasonValid.value = status;
      break;
    case "cpf":
      isCpfValid.value = status;
      break;
    case "dateBirth":
      isDateBirthValid.value = status;
      break;
    case "openingDate":
      isOpeningDateValid.value = status;
      break;
    case "cnpj":
      isCnpjValid.value = status;
      break;
    case "telephone":
      isTelephoneValid.value = status;
      break;
    case "password":
      isPasswordValid.value = status;
      break;
  }
};

const inputValue = (key, value) => {
  emit("input:value", { key, value });
};

nextTick(() => (inputDataLocal.value = { ...props.inputData }));
</script>

<style lang="scss" scoped></style>
