/*首页接口*/
import http from "@/Untils/httpRequest"

/*获取用户名*/
export function getUsername() {
  return http({
    url: http.apis("/sys/profile"),
    method: "post"
  })
}
