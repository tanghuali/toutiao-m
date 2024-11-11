/**
 *  请求模块
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://toutiao.itheima.net'
})

// 导出
export default request
