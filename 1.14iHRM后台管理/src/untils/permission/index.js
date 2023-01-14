import http from "../http"

function getPermission() {
  return http({
    url: http.apis("/sys/permission"),
    method: "get"
  })
}
// 权限管理列表
export { getPermission }
