export const setLocalStorage = (key, value) => {
	console.log(value)
	window.localStorage.setItem(key, value)
}