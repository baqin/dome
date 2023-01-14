import http from "../http"

function getApprovals(data) {
  return http({
    url: http.apis("/user/process/instance/" + data.page + "/" + data.pageSize),
    method: "put",
    data
  })
}
// 审批列表

export { getApprovals }
