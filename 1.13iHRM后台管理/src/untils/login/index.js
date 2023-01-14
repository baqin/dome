import http from "../http"

function login(data) {
  return http({
    url: http.apis("/sys/login"),
    method: "post",
    data
  })
}

export { login }
