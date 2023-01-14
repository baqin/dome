import Cookies from "js-cookie"

export function getToken() {
  return Cookies.get("Authorization")
}
export function setToken(token) {
  return Cookies.set("Authorization", token)
}
export function removeToken() {
  return Cookies.remove("Authorization")
}
