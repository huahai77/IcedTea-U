<template>
<div class="order-container">
  <!-- 导航栏 -->
  <van-nav-bar
    left-text="订单列表 "
    left-arrow
    @click-left="$router.back()"
  />

  <!-- 通知栏 -->
  <van-notice-bar
    left-icon="volume-o"
    text="提示：品牌试用装为特殊商品，不支持退换货及退款服务"
  />

  <!-- 标签页 -->
  <van-tabs v-model="active">
    <!-- 未发货模块 -->
    <van-tab title="未发货">
      <template v-if="allCount">
        <not-shipped 
          v-for="goods in buyCartList" 
          :key="goods.id" 
          :goods="goods" 
        />
      </template>
      <!-- 没有商品 -->
      <div v-else class="not-goods">
        <img src="../../assets/image/notGoods.png" />
      </div>
    </van-tab>
     <!-- 底部栏 -->
      <div class="footer-nav" v-if="allCount">
        <div class="all-select-icon">
          <van-icon 
            :name="isAllSelect ? 'checked' : 'circle'"
            @click="allSelectClick(isAllSelect)"
          />
          <span>全选</span>
        </div>
        <van-button 
          :color="selectTotal >=3 ? '#ee0a24' : '#C4BDBD'" 
          :disabled="selectTotal < 3"
          @click="$router.push('/buy')"
          >发货
        </van-button>
      </div>
    <van-tab title="我的包裹">

      <my-package />
    </van-tab>
  </van-tabs>


</div>
</template>

<script>
import notShipped from './components/notShipped.vue'
import myPackage from './components/myPackage.vue'
import {mapGetters, mapMutations, mapState} from 'vuex'
export default {
  name: 'orderIndex',
  props: {},

  components: {
    notShipped,
    myPackage
  },

  data () {
    return {
      active: 0,
    }
  },

  computed: {
    // 购物车商品数据
    ...mapState({'buyCartList': 'cartList'}),
    // 总数量
    ...mapGetters({'allCount': 'ALLCOUNT'}),
    // 全选
    ...mapGetters({'isAllSelect': 'ISALLSELECT'}),
    // 当前选中数量,满三件起发
    ...mapGetters({'selectTotal': 'SELECTTOTAL'})
  },

  watch: {},

  created () {  

  },

  mounted () {
  },

  methods: {
    ...mapMutations(['ALLSELECTCLICK']),

  // 点击全选事件
  allSelectClick(flag) {
    this.ALLSELECTCLICK(flag)
  }
  }
}
</script> 
<style scoped lang="less">
.order-container {
  height: 100vh;
  background: #F0F0F0;
  .van-nav-bar {
    background-color: unset;
    /deep/.van-icon {
      color: #000;
    }
    /deep/.van-nav-bar__text {
      color: #000;
      font-size: 15px;
    }
  }

  .van-notice-bar {
    background: #F3DECC;
  }

  .van-tabs {
    /deep/.van-tabs__nav {
      background-color: unset;
      .van-tab--active {
        color: #FF273D;
      }
    }
    /deep/.van-tabs__wrap {
        margin-bottom: 10px !important;
      }

    // 没有商品
    .not-goods {
      width: 180px;
      height: 163px;
      margin: auto;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      >img {
        width: 100%;
        height: 100%;
      }
    }

    // 底部栏
    .footer-nav {
    width: 100%;
    height: 49px;
    background: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /deep/.all-select-icon {
      display: flex;
      align-items: center;
      margin-left: 10px;
      >i {
        font-size: 20px;
      }
      .ice-xuanzhong {
          color: #FF273D;
        }
      >span {
        font-size: 15px;
        padding-left: 5px;
        
      }
    }
    >button {
      width: 163px;
      height: 49px;
      // background: #C4BDBD;
      border: none;
      color: #fff;
    }
  }
  }

  .van-icon-checked {
    color: #EE0A24;
  }
  
}


</style>
