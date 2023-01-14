import http from "../http"

function getProfile() {
  return http({
    url: http.apis("/sys/profile"),
    method: "post"
  })
}

export { getProfile }
