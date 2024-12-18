/**
 * @description: 用户相关请求模块
 */
import request from '@/utils/request'
/**
 * 登录、注册
 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}
