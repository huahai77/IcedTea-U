/**
 * 封装 axios 请求模块
 */
import axios from "axios"

//  const request = axios.create({
//    baseURL: " http://localhost:8080/" // 基础路径
//  })
const request = axios.create({
   baseURL: "http://api.ux.iceteapi.com/" // 基础路径
})

export default request