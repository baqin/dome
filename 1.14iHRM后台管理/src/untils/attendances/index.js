import http from "../http"

function getDepartment() {
  return http({
    url: http.apis("/company/department"),
    method: "get",
  })
}
// 考勤部门
function getAttendances(params) {
  return http({
    url: http.apis("/attendances"),
    method: "get",
    params
  })
}
// 考勤列表

export { getDepartment, getAttendances }
