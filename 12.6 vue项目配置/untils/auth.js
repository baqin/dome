import Cookies from 'js-cookie'
const Tokenkey = 'Authorization'
export function getTaken() {
	return Cookies.get(Tokenkey)
}
export function setToken(token) {
return Cookies.set(Tokenkey,token)
}
export function renoveToken() {
return Cookies.remawe(Tokenkey)}
