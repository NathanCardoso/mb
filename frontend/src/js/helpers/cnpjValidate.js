export const cnpjValid = (cnpj) => {
  cnpj = cnpj.replace(/[^\d]/g, '');

  if (cnpj.length !== 14) return false;
  if (/^(\d)\1+$/.test(cnpj)) return false;

  let length = cnpj.length - 2;
  let number = cnpj.substring(0, length);
  let digits = cnpj.substring(length);
  let sum = 0;
  let post = length - 7;
  for (let i = length; i >= 1; i--) {
    sum += number.charAt(length - i) * post--;
    if (post < 2) post = 9;
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result != digits.charAt(0)) return false;

  length = length + 1;
  number = cnpj.substring(0, length);
  sum = 0;
  post = length - 7;
  for (let i = length; i >= 1; i--) {
    sum += number.charAt(length - i) * post--;
    if (post < 2) post = 9;
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result != digits.charAt(1)) return false;

  return true;
}
