import http from '../api/http'

/**封装登录接口 */
export const LoginPost = (data: any) => {
  return http({
    url: 'sys/login',
    method: 'post',
    data
  })
}
