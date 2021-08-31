<template>
<div class="payment-container">
  <van-nav-bar
    left-text="包裹详情"
    left-arrow
    @click-left="$router.back()"
  />

  <!-- 收货地址 -->
  <div class="address-wrap" v-if="$route.params.freight">
    <div class="iconfont ice-dizhi"></div>

      <div class="right-wrap">
        <div class="phone">
          <span>收件人 a</span>
          <span>&nbsp;&nbsp;13622740807</span>
        </div>
        <h4>广东省广州市海珠区</h4>
      </div>
  </div>

  <!-- 订单信息 -->
  <div class="order-info-wrap" v-if="$route.params.freight">
    <h3>订单信息</h3>
      <van-card v-for="item in payItemNum.goodsDataList" :key="item.id">
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

  <!-- 金额信息 -->
  <div class="price-wrap" v-if="$route.params.freight">>
    <van-cell title="订单数量" :border="false"><span>{{payItemNum.res}}</span></van-cell>
    <van-cell title="商品数量" :border="false"><span>{{payItemNum.num}}</span></van-cell>
    <van-cell title="快递费" :border="false"><span>{{$route.params.freight}}</span></van-cell>
    <van-cell title="优惠" value="-￥1"/>
    <van-cell 
      title="实际金额总计" 
      :border="false">
      <span>{{$route.params.freight + Number(payItemNum.price) - 1}}</span>
    </van-cell>
  </div>

  <!-- 物流信息 -->
  <div class="logistics-wrap" v-if="$route.params.freight">
    <van-cell title="物流信息" :border="false"/>
    <van-cell title="承运物流" value="申通" :border="false"/>
    <van-cell title="快递单号" value="复制" :border="false"/>
    <van-cell title="发货时间" value="2021-04-01 12:00" :border="false"/>
    <van-cell title="包裹编号" value="复制" :border="false" />
  </div>

  <!-- 空状态 -->
  <van-empty description="没有商品" v-else>
    <van-button round type="danger" class="bottom-button" @click="$router.push('/home')">挑选商品</van-button>
  </van-empty>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'paymentIndex',
  props: {},

  components: {},

  data () {
    return {
      
    }
  },

  computed: {
    // 购买的商品信息
    ...mapGetters({'payItemNum': 'PAY_ITEM_NUM'}),
  },

  watch: {},

  created () {
  },

  mounted () {
  },

  methods: {},

}
</script> 
<style scoped lang="less">
.payment-container {
  height: 100vh;
  background: #F0F0F0;

  .address-wrap {  
    display: flex;
    width: 365px;
    height: 72px;
    background: #FFFFFF;
    opacity: 1;
    border-radius: 5px;
    margin: 0 auto 10px;
    .ice-dizhi {
      width: 28px;
      height: 28px;
      font-size: 28px;
      display: inline-block;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      padding-left: 10px;
      color: red;
    }
    .right-wrap {
      margin: 10px 0 10px 25px;
      .phone {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #333;
        :nth-child(1) {
          >i {
            font-size: 14px;
            color: #666;
          }
        }
        :nth-child(2) {
          color: #999;
          font-size: 14px;
        }
      }

      >h4 {
        font-size: 12px;
        color: #333;
      }
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

  .price-wrap {
    width: 365px;
    background: #FFFFFF;
    opacity: 1;
    border-radius: 8px;
    margin: 10px auto;
  }

  .logistics-wrap {
    width: 365px;
    background: #FFFFFF;
    opacity: 1;
    border-radius: 5px;
    margin: 10px auto 20px;
  }

  .van-empty {
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    .bottom-button {
    width: 160px;
    height: 40px;
  }
  }
}
</style>
