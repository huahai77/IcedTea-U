<template>
<div class="buy" v-if="confirmShip.allPrice">
  <van-nav-bar
    left-text="确认发货"
    left-arrow
    @click-left="$router.back()"
  />

  <!-- 收货地址 -->
  <div class="address-wrap" v-if="confirmShip.allPrice">
    <h3>收货信息</h3>
    <div class="phone">
      <span>收件人&nbsp;&nbsp;&nbsp;<i>花海</i></span>
      <span>13622740807</span>
    </div>
    <h4>广东省广州市海珠区</h4>
    <van-icon name="arrow" />
  </div>

  <!-- 订单信息 -->
  <div class="order-info-wrap" v-if="confirmShip.allPrice">
    <h3>订单信息</h3>
      <van-card v-for="item in confirmShip.allGoods" :key="item.id">
        <img slot="thumb" :src="item.logo" />
        <div slot="title" class="title">
          <p>{{item.name}}</p>
          <span class="price">
            <i>￥</i>
            {{item.price * item.count}}
            <i class="num">x{{item.count}}</i>
          </span>
        </div>
        <div slot="desc" class="desc">
          <span>订单号</span>
          Order20202
        </div>
        <div slot="tags" class="order_time">
          <span>订单时间</span>
          2021-04-8 12:00:00
        </div>
      </van-card>
  </div>

  <!-- 发货按钮 -->
  <van-button 
    class="copy-btn" 
    round 
    block
    :class="{is_show: !confirmShip.allPrice}"
    @click="confirm"
  >
    确认申请
  </van-button>
</div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex'
export default {
  name: 'buyIndex',
  props: {},

  components: {},

  data () {
    return {
    
    }
  },

  computed: {
    // 确认发货后的商品
    ...mapGetters({'confirmShip': 'CONFIRMSHIP'}),

    // 计算运费
    freight() {
      let init = 8
      if(this.confirmShip.allPrice > 20) {
        init = 0
      }
      return init
    }
  },

  watch: {},

  created () {

  },

  mounted () {
  },

  methods: {
    // 确认申请发货
    confirm() {
      let data = {
        orderId: Date.now(),
        goodsData: this.confirmShip.allGoods,
        freight: this.freight
      }
      this.$store.commit('SUBMITORDER',data)
      this.$toast.success('购买成功')
      this.$router.replace({
        name: 'payment',
        params: {
          payId: Date.now(),
          freight: this.freight //运费
        }
      })
    }
    
  }

}
</script> 
<style scoped lang="less">
i {
  font-style:normal;
}
.buy {
  height: 100vh;
  background: #F0F0F0;
  .address-wrap {
    position: relative;
    width: 365px;
    height: 102px;
    background: #FFFFFF;
    opacity: 1;
    border-radius: 7px;
    margin: 0 auto 10px;
    // font-size: 12px;
    padding: 7px 0 13px 8px;
    >h3 {
      height: 21px;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 700;
      line-height: 18px;
      color: #333333;
      opacity: 1;
    }
    .phone {
      font-size: 0;
      height: 20px;
      margin: 7px 0 7px 0;
      :first-child {
        font-size: 14px;
        padding-right: 7px;
        font-weight: 700;
      }
      :last-child {
        font-size: 11px;
        color: #999999;
      }
    }
    >h4 {
      width: 276px;
      height: 31px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 14px;
      color: #333333;
      opacity: 1;
    }
    .van-icon-arrow {
      font-size: 12px;
      position: absolute;
      right: 8px;
      top: 50%;
    }
  }

  .order-info-wrap {
    width: 365px;
    background: #FFFFFF;
    opacity: 1;
    border-radius: 5px;
    margin: auto;
    padding: 7px 7px 0 8px;
    >h3 {
      height: 21px;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 700;
      line-height: 18px;
      color: #333333;
      opacity: 1;
    }
    .van-card {
      background: #fff;
      margin-bottom: 20px;
      margin: auto;
      border-radius: 5px;
      padding: 5px 0 20px 0;
      .van-card__header {
        height: 100%;
        width: 100%;
      }
      /deep/.check-icon {
        position: absolute;
        top: 50%;
        margin-left: -20%;
      }
      .van-card__thumb {
        width: unset;
        height: unset;
        margin-right: unset;
        .van-card__tag {
          top: 50%;
          left: 50%;
          margin-left: -47%;
          margin-top: -12%;
          font-size: 20px;
    
        }
        img {
          width: 88px;
          height: 88px;
        }
      
    }
    .van-card__content {
      // width: 180px;
      padding-left: 10px;
      .title {
        display: flex;
        align-items: end;
        >p {
          font-size: 14px;
          color: #333;
          overflow: hidden;
          -webkit-line-clamp: 2; 
          -webkit-box-orient: vertical;
          display: -webkit-box;
          width: 196px;
        }
        .price {
          text-align: right;
          width: 55px;
          color: #FF273D;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 800;
          >i {
            font-size: 11px;
            font-family: PingFang SC;
            font-weight: 800;
            margin-right: -3px;
            font-style:normal;
          }
          .num {
            margin-right: 0;
            color: #999;
          }
        }
      }
      .desc {
        font-size: 11px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #999999;
        margin: 5px 0;
        >span {
          padding-right: 10px;
        }
      }
      .order_time {
        font-size: 11px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #999999;
      }


    }
  }
  }

  .copy-btn {
    color: #fff;
    width: 350px;
    height: 40px;
    background: linear-gradient(119deg, #FE4A44 0%, #EF293D 100%);
    opacity: 1;
    border-radius: 25px;
    margin: auto;
    position: fixed;
    bottom: 15px;
    left: 12px;
    right: 12px;
  }
  .is_show {
    display: none;
  }

  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .van-empty {
    padding: 0;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
