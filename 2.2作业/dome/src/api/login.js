/*登录接口*/
import http from "@/Untils/httpRequest"

export function login(data) {
  return http({
    url: http.apis("/sys/login"),
    method: "post",
    data
  })
}
