import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决路由命名冲突的方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      active: 0,
      isShowTabBar: true 
    },
    component: () => import('@/views/home/')
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      active: 2,
      isShowTabBar: true,
      
    },
    component: () => import('@/views/user/')
  },
  // 详情
  {
    path: '/details/:goodsId',
    name: 'details',
    component: () => import('@/views/details/'),
    // 将动态路由参数映射到组件props
    props: true
  },
  // 订单
  {
    path: '/order',
    name: 'order',
    meta: {
      active: 1,
    },
    component: () => import('@/views/order/')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('@/views/address/')
  },
  {
    path: '/increase-add',
    name: 'increase-add',
    component: () => import('../views/increase-add/')
  },
  // 确认订单
  {
    path: '/buy',
    name: 'buy',
    component: () => import('@/views//buy/')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
  },
  // 购买详情
  {
    path: '/payment/:payId',
    name: 'payment',
    component: () => import('@/views/payment/')
  }

]

const router = new VueRouter({
  routes
})

export default router
