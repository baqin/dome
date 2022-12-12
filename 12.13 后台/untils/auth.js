import Cookies from "js-cookie"
const TokenKey = "Authorization"

export function getToken() {
  return Cookies.get(TokenKey)
  // 获取
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
  // 存
}
export function removeToken() {
  return Cookies.remove(TokenKey)
  // 删除
}
