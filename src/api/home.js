/**
 * 首页相关请求
 */
import request from '@/utils/request'

// 获取轮播图
export const carousel = () => {
  return request({
    method: 'GET',
    url: '/api/apply/v1/icetea/banner?appid=wx4cb945415759dfe7'
  })
}

// 商品分类
export const categories = () => {
  return request({
    method: 'GET',
    url: '/api/apply/v1/icetea/category/selection?appid=wx4cb945415759dfe7'
  })
}

// 商品列表
export const goodsList = params => {
  return request({
    method: 'GET',
    url: '/api/apply/v1/icetea/commodity/list?appid=wx4cb945415759dfe7',
    params
  })
}

// 商品详情
export const goodsDetails = goodId => {
  return request({
    method: 'GET',
    url: '/api/apply/v1/icetea/commodity/detail',
    params: {
      appid: "wx4cb945415759dfe7",
      commodity_id: goodId
    }
  })
}
