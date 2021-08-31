<template>
<div class="not-shipped">

  <!-- 未发货模块 -->
  <van-swipe-cell>
  <van-card @click="changeSelected(goods.id)">
    <van-icon :name="goods.isSelected ? 'checked' : 'circle'" slot="tag" class="check-icon"/>
    <img slot="thumb" :src="goods.logo" />
    <div slot="title" class="title">{{goods.name}}</div>
    <div slot="desc" class="desc">
      <span>订单号</span>
      Order20202
    </div>
    <div slot="tags" class="order_time">
      <span>订单时间</span>
      2021-04-8 12:00:00
    </div>
    <div slot="num" class="price">
      <span>￥</span>
      {{goods.price * goods.count}}
    </div>
  </van-card>
   <van-button square text="删除" type="danger" class="delete-button" slot="right" @click="delGoods(goods.id)"/>  
  </van-swipe-cell>
 
</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'notShipped',
  props: {
    // 商品数据
    goods: {
      type: Object,
      require: true
    },
  },

  components: {},

  data () {
    return {
    }
  },

  computed: {
    
  },

  watch: {},

  created () {
    
  },

  mounted () {
    
  },

  methods: {
    ...mapMutations(['DELGOODS','CHANGESELECTED','CHANGESELECTED']),
    
    // 单选
    changeSelected(id) {
      this.CHANGESELECTED(id)
    },

    // 删除指定商品
    delGoods(id) {
      this.DELGOODS(id)
    }
  }

}
</script> 
<style scoped lang="less">
.not-shipped {
  position: relative;
  padding-bottom: 10px;
    .van-card {
      width: 365px;
      height: 106px;
      margin: auto;
      border-radius: 5px;
      padding: 5px 7px 5px 0;
      .van-card__header {
        height: 100%;
        width: 100%;
      }
      /deep/.check-icon {
        position: absolute;
        top: 50%;
        margin-left: -20%;
      }
      // .ice-xuanzhong {
      //   color: red;
      //   font-size: 20px;
      // }
      // .ice-xuanzhongyuandian1 {
      //   font-size: 20px;
      // }
      .van-card__thumb {
        width: unset;
        height: unset;
        margin-right: unset;
        padding-left: 30px;
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
        font-size: 14px;
        color: #333;
        overflow: hidden;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
        display: -webkit-box;
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
      .price {
        color: #FF273D;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 800;
        >span {
          font-size: 11px;
          font-family: PingFang SC;
          font-weight: 800;
          margin-right: -3px;
        }
      }
    }
  }

  .delete-button {
    height: 100%;
  }

  .van-icon-checked {
    color: #EE0A24;
  }
}
</style>
