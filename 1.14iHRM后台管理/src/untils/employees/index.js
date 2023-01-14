import http from "../http"

function getUser(params) {
  return http({
    url: http.apis("/sys/user"),
    method: "get",
		params
  })
}

export { getUser }
