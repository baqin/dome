import http from "../http"

function getList(data) {
  return http({
    url: http.apis("/social_securitys/list"),
    method: "post",
    data
  })
}
// 社保列表

function getSettings() {
  return http({
    url: http.apis("/social_securitys/settings"),
    method: "get"
  })
}
// 历史报表数字

function getCity() {
  return http({
    url: http.apis("/sys/city"),
    method: "get"
  })
}
// 社保城市公积金城市

function getDepartment() {
  return http({
    url: http.apis("/company/department"),
    method: "get"
  })
}
// 部门

export { getList, getSettings, getCity, getDepartment }
