/*设置接口*/
import http from "@/Untils/httpRequest"

/*角色管理接口*/
export function Setup(data) {
  return http({
    url: http.apis("/sys/role?page=1&pagesize=10&total=0"),
    method: "get",
    data
  })
}

/*添加角色接口*/
export function AddSetup(data) {
  return http({
    url: http.apis("/sys/role"),
    method: "post",
    data
  })
}

/*权限接口*/
export function Addrole(data) {
  return http({
    url: http.apis("/sys/permission"),
    method: "get",
    data
  })
}

/*分配权限接口*/
export function AddroleOk(data) {
  return http({
    url: http.apis("/sys/role/assignPrem"),
    method: "put",
    data
  })
}

/*编辑角色接口*/
export function Editrole(data) {
  return http({
    url: http.apis(`/sys/role/${data}`),
    method: "get",
    data
  })
}

/*公司信息接口*/
export function Setupsee(data) {
  return http({
    url: http.apis("/company/1"),
    method: "get",
    data
  })
}
