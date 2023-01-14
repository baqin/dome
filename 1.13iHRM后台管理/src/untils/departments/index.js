import http from "../http"

function getDepartment() {
  return http({
    url: http.apis("/company/department"),
    method: "get"
  })
}
// 组织架构

export { getDepartment}
