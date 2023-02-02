/*员工接口*/
import http from "@/Untils/httpRequest"

export function user(data) {
  return http({
    url: http.apis(`/sys/user?page=${data.page}&size=${data.size}&total=${data.total}`),
    method: "get"
  })
}

export function userInfo(data) {
  return http({
    url: http.apis(`/sys/user/${data}`),
    method: "get"
  })
}

export function job(data) {
  return http({
    url: http.apis(`/employees/${data}/jobs`),
    method: "get"
  })
}
