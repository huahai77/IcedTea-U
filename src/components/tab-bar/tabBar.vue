<template>
<div class="tab-bar">
  <!-- 底部标签栏 -->
  <van-tabbar v-model="active">
    <van-tabbar-item :icon="$route.meta.active==0 ? 'wap-home' : 'wap-home-o'" to="/home">首页</van-tabbar-item>
    <van-tabbar-item :icon="$route.meta.active==1 ? 'cart' : 'cart-o'" to="/order">订单</van-tabbar-item>
    <van-tabbar-item :icon="$route.meta.active==2 ? 'friends' : 'friends-o'" to="/user">{{userInfo ? '我的' : '未登录'}}</van-tabbar-item>
  </van-tabbar>
</div>
</template>



<script>
import {mapState} from 'vuex'
export default {
  name: '',
  // 组件参数 接收来自父组件的数据
  props: {},

  // 局部注册的组件
  components: {},

  // 组件状态值
  data () {
    return {
    }
  },

  // 生命周期函数
  created () {
  },
  mounted () {
  
  },

  // 计算属性
  computed: {
    active: {
      // 激活项
      get() {
        return this.$route.meta.active
      },
      set() {}
    },

    ...mapState(['userInfo'])

  },

  // 组件方法
  methods: {
    
  },

  // 侦听器
  watch: {},
}
</script> 

<style scoped lang='less'>
.van-tabbar {
  .van-tabbar-item--active {
    color: #F3323F;
  }
}
</style>
