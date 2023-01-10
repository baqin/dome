import Cookies from 'js-cookie';

function getToken() {
	return Cookies.get('Authorization');
}
function setToken(token: string) {
	return Cookies.set('Authorization', token);
}
function removeToken() {
	return Cookies.remove('Authorization');
}

export { getToken, setToken, removeToken };
