import http from "../http"

function getRole(params) {
  return http({
    url: http.apis("/sys/role"),
    method: "get",
		params
  })
}
// 角色管理
function getCompany(params) {
  return http({
    url: http.apis("/company/" + params),
    method: "get"
  })
}
// 公司信息
export { getRole, getCompany }
