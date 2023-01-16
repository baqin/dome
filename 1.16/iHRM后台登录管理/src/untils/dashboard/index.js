import http from "../http"

function getProfile() {
  return http({
    url: http.apis("/sys/profile"),
    method: "post"
  })
}
function getUser(params) {
  return http({
    url: http.apis("/sys/user" + "/" + params),
    method: "get"
    // params
  })
}

export { getUser, getProfile }
