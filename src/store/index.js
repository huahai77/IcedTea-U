import Vue from 'vue'
import Vuex from 'vuex'
import {getStore,setStore,removeStore} from '../utils/strorage'

Vue.use(Vuex)

const USER_KEY = 'ice-user'

export default new Vuex.Store({
  state: {
    userInfo: getStore(USER_KEY),   //用户信息
    cartList: [], //加入购物车商品
    goodsLogo: '', //图片logo
    orderData: [],   //完成订单商品数据
  },    

  getters: {
    // 计算购物车商品总数
    ALLCOUNT(state) {
      let count = 0
      state.cartList.forEach(item => {
        count += item.count
      })
      return count
    },

    // 计算是否全选
    ISALLSELECT(state) {
      let allSelect = true  //默认全选
      state.cartList.forEach(item => {
        if(!item.isSelected) {
          allSelect = false   //有一个没选中就改变为false
          return
        }
      })
      return allSelect
    },

    // 计算选中数量，满3件起发货 
    SELECTTOTAL(state) {
      let total = 0
      state.cartList.forEach(item => {
        // 如果选中就收集起来
        if(item.isSelected) {
          total += item.count
        }
      })
      return total
    },

    // 计算确认发货后的商品
    CONFIRMSHIP(state) {
      let allGoods = []
      let allPrice = 0
      state.cartList.forEach(item => {
        // 如果商品发货前选中就收集起来
        if(item.isSelected) {
          allGoods.push(item)
          allPrice += (item.price * item.count) //确认发货后的总价格
        }
      })
      return {
        allGoods,
        allPrice: allPrice.toFixed(2)
      }
      
    },
    
    // 计算购买完的商品信息
    PAY_ITEM_NUM(state) {
      let num = 0 //商品数量
      let res = 0 //订单数量
      let price = 0 //商品价格  
      let goodsDataList = []  //商品列表
      for (let item of state.orderData) {
        goodsDataList = item.goodsData  //某个商品的数据
        res = item.goodsData.length   //订单数量
        // 判空，结束本次循环
        if (!item.goodsData) continue
        for (let value of item.goodsData) {
          num += value.count
          price += (value.count * value.price)
        }
      }
      return { num, res, price: price.toFixed(2), goodsDataList}
    }

  },

  mutations: {

    //保存商品logo
    ADDGOODSLOOG(state, logo) {
      state.goodsLogo = logo
    },


    // 存储用户信息
    SETUSERINFO(state,data) {
      state.userInfo = data
      // 持久化存储
      setStore(USER_KEY, state.userInfo)
    },
    
    // 添加商品到购物车
    ADDCARTLIST(state, {id,logo,name,price}) {
      let cart = state.cartList
      let goods = {id,logo,name,price}
      let falg = true   //默认没有

      if (cart.length) {
        cart.forEach(item => {
          if (item.id === id) {
              item.count++
              falg = false
          }
        })
      }

      if (!cart.length || falg) {
        Vue.set(goods, 'count', 1)
        Vue.set(goods, 'isSelected', true)
        Vue.set(goods, 'logo', state.goodsLogo)
        cart.push(goods)
      }
    },

    // 商品单选
    CHANGESELECTED(state, id) {
      state.cartList.forEach(item => {
        if(item.id === id) {
          item.isSelected = !item.isSelected
          return
        }
      })
    },

    // 删除某个商品
    DELGOODS(state,id) {
      state.cartList.forEach((item,index) => {
        if(item.id === id) {
          state.cartList.splice(index, 1)
          return
        }
      })
    },

    // 增加商品数量
    ADDGOODSNUMBER(state,id) {
      state.cartList.forEach(item => {
        if(item.id === id) {
          item.count++
          return
        }
      })
    },

    // 点击全选
    ALLSELECTCLICK(state, flag) {
      // 传入一个状态，取反
      state.cartList.forEach(item => {
        item.isSelected = !flag
      })
    },

    // 提交订单
    SUBMITORDER(state, data) {
      // console.log(data)
      state.orderData.unshift(data)
      // while(true) {
        let i = state.cartList.length
        // let del = 0
      // 查找我购物车原本的商品，如果有选中发货的就从中删除它
      while(i--) {
        if(state.cartList[i].isSelected) {
          state.cartList.splice(i,1)
          // del++
          // break
        }
      }
      // if(del === 0) break
      // }
      
    }

  },
  actions: {
  },
  modules: {
  }
})
