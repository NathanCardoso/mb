export const dateValidade = (date) => {
  const [day, month, year] = date.split('/').map(Number);
  const dateObjeto = new Date(year, month - 1, day);

  if (dateObjeto.getFullYear() !== year
	|| dateObjeto.getMonth() + 1 !== month
	|| dateObjeto.getDate() !== day) return false;
  
  if (year <= 1900) return false;

  return true;
}
