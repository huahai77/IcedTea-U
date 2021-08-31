<template>
<div class="my-package">
  
  <div class="goods-wrap" v-for="item in payItemInfo.goodsDataList">
    <h3>包裹编号：No100000010101010</h3>

    <div class="goods-info">
      <ul class="goods-logo">
        <li><img :src="item.logo" alt="" width="68" height="68"></li>
      </ul>
      <div class="goods-total">
        <span>共{{payItemInfo.res}}单</span>
        <van-icon name="arrow"></van-icon>
      </div>
    </div>
    <div class="goods-price">
      <span>合计:</span>
      <span>￥{{payItemInfo.price}}</span>
    </div> 
  </div>

  
</div>
</template>



<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: '',
  // 组件参数 接收来自父组件的数据
  props: {},

  // 局部注册的组件
  components: {},

  // 组件状态值
  data () {
    return {}
  },

  // 生命周期函数
  created () {
  },
  mounted () {
  },

  // 计算属性
  computed: {
    ...mapGetters({'payItemInfo': 'PAY_ITEM_NUM'})
  },

  // 组件方法
  methods: {},

  // 侦听器
  watch: {},
}
</script> 

<style scoped lang='less'>
.my-package {
  margin-bottom: 10px;
  .goods-wrap {
    width: 365px;
    height: 120px;
    background: #FFFFFF;
    opacity: 1;
    border-radius: 5px;
    margin: auto;
    padding: 5px 9px 2px 9px;
    >h3 {
      height: 18px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 18px;
      color: #333333;
      opacity: 1;
    }
    .goods-info {
      margin-top: 5px;
      height: 68px;
      display: flex;
      justify-content: space-between;
      .goods-logo {
        width: 230px;
        display: inline-flex;
        justify-content: space-between;
      }
      .goods-total {
        font-size: 12px;
        color: #999999;
        margin: auto 0;
        >span {
          padding-right: 3px;
        }
      }
    }
    .goods-price {
      text-align: end;
      font-size: 13px;
      :nth-child(2) {
        color: #FF273D;
        padding-left: 3px;
      }
    }
    
  }
}
</style>
