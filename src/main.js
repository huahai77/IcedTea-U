import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { getStore } from './utils/strorage'

// *Vant组件
import Vant from 'vant'


import { Lazyload } from 'vant' // 导入懒加载模块Lazyload
Vue.use(Lazyload) // 注册懒加载指令

// *设置 REM 基准值
import 'amfe-flexible'

// *Vant组件样式
import 'vant/lib/index.css'

// *全局样式表
import './styles/index.less'

// axios
import axios from 'axios'
Vue.prototype.$http = axios


// 引入指纹标识
// import Fingerprint2 from 'fingerprintjs2'

// Fingerprint2.get(function(components) {
//   const values = components.map(function(component,index) {
//     if (index === 0) { //把微信浏览器里UA的wifi或4G等网络替换成空,不然切换网络会ID不一样
//       return component.value.replace(/\bNetType\/\w+\b/, '')
//     }
//     return component.value
//   })
//   // 生成最终id murmur   
//   const murmur = Fingerprint2.x64hash128(values.join(''), 31)
// })

// router.beforeEach((to, from, next) => {
//   console.log(to.matched)

//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     next({
//       path: '/login',
//       query: {
//         redirect: to.fullPath
//       }
//     })
//   }else {
//     next()
//   }
// })


Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
