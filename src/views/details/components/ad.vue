<template>
<!-- //!广告位-->
<div class="ad"> 
    <div class="ice-tea-red"><img :src="adImg" /></div>
    <!-- first -->
    <div class="goods-wrap">
      <h3>{{goodsDetail.commodity_name}}</h3>
      <div class="price">
        <div class="left">
          <span><i>￥</i>{{goodsDetail.commodity_price}}</span>
          <span>试用价</span>
          <span>￥{{goodsDetail.commodity_value}}</span>
        </div>
        <div class="right">
          {{goodsDetail.sell_count}}人已领
        </div>
      </div>
    </div>
    <!-- last -->
    <div class="description-wrap">
      <div class="text">
        <i class="iconfont ice-zhengpin1"></i>
        <span>正品保证</span>
        <i class="iconfont ice-qianbao"></i>
        <span>0.01元起</span>
        <i class="iconfont ice-kuaidi"></i>
        <span>3件包邮</span>
      </div>
      <p class="title">*品牌试用装为特殊商品，不支持退货及退款</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'ad',
  props: {
    goodsDetail: {
      type: Object,
      require: true
    }
  },

  components: {},

  data () {
    return {
      // 广告图
      adImg: require('../../../assets/image/details/组件 4 – 1.png')
    }
  },

  computed: {},

  watch: {},

  created () {
  },

  mounted () {
  },

  methods: {},

}
</script> 
<style scoped lang="less">
.ad {
  .ice-tea-red {
    width: 375px;
    img {
      width: 100%;
    }
  }
  .goods-wrap {
    box-sizing: border-box;
    width: 365px;
    // height: 84px;
    background: #FFFFFF;
    opacity: 1;
    border-radius: 16px 16px 10px 10px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 354px;
    padding: 10px 15px 10px 8px;
    h3 {
      // width: 323px;
      // height: 22px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      // line-height: 22px;
      color: #333333;
      opacity: 1;
    }
    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        >span {
          font-size: 12px;
        }
        :first-child {
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 800;
          color: #FF273D;
          opacity: 1;
          i {
            font-style: unset;
            font-size: 14px;
          }
        }
        :nth-child(2) {
          display: inline-block;
          border-radius: 0px 10px 0px 10px;
          background: red;
          color: #F0F0F0;
          width: 44px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          margin: 0 4px;
        }
        :nth-child(3) {
          text-decoration:line-through;
          font-size: 14px;
          color: #919191;
        }
      }

      .right {
        color: #FF273D;
        font-size: 12px;
        font-weight: 400;
        padding-top: 24px;
      }
    }
  }

  .description-wrap {
    box-sizing: border-box;
    width: 365px;
    // height: 84px;
    background: #FFFFFF;
    opacity: 1;
    border-radius: 10px;
    margin: 50px 5px 10px;
    font-size: 12px;
    padding: 10px 15px;
    .text {
      display: flex;
      justify-content:space-around;
      color: red;
      font-weight: 900;
      >span {
        margin-left: -40px;
      }
    }
    .title {
      color: #919191;
      text-align: center;
      margin-top: 10px;
    }
  }
}
</style>
