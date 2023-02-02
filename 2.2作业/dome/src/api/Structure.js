/*组织架构接口*/
import http from "@/Untils/httpRequest"

export function getStructure() {
  return http({
    url: http.apis("/company/department"),
    method: "get"
  })
}

/*组织架构添加接口*/
export function AddStructure(data) {
  return http({
    url: http.apis("/company/department"),
    method: "post",
    data
  })
}

/*组织架构编辑接口*/
export function EditStructure(data) {
  return http({
    url: http.apis(`/company/department/${data}`),
    method: "get"
  })
}

/*组织架构确定编辑接口*/
export function EditOkStructure(data) {
  return http({
    url: http.apis(`/company/department/${data}`),
    method: "put"
  })
}

/*组织架构删除接口*/
export function delStructure(data) {
  return http({
    url: http.apis(`/company/department/${data}`),
    method: "DELETE"
  })
}
