import Cookies from "js-cookie"

/**根据后端接口随时变化的 */
const TokenKey = "Authorization"

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
