import http from "@/untils/httpRequest"

export const getUserList = (params) => {
  return http.apiPost("/users", params).then((res) => res)
}
