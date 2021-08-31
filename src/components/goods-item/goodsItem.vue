<template>
<!--    -->
<van-cell 
  class="goods" 
  @click="jumpDetails(goods.commodity_id, goods.commodity_logo)"
>
  <div slot="icon" class="img">
    <img :src="goods.commodity_logo" />
  </div>  

  <div slot="title" class="title">
    <p>{{goods.commodity_name}}</p>
    <p>{{goods.commodity_describe}}</p>  
  </div>

  <div slot="label" class="label">
    <span>专享试</span>
    <span>{{goods.sell_count}}人试用</span>
  </div>

  <div class="price">
    <span>试用价￥{{goods.commodity_price}}</span>
    <span>￥{{goods.commodity_value}}</span>
  </div>
</van-cell>

</template>

<script>
export default {
  name: 'goodsItem',  
  props: {
    goods: {
      type: Object,
      require: true
    }
  },

  components: {},

  data () {
    return {}
  },

  computed: {},

  watch: {},

  created () {
  },

  mounted () {
  },

  methods: {
    // 点击跳转详情
    jumpDetails(id,logo) {

      this.$router.push({
        path: `/details/${id}`
      })
      // 订单需要logo
      this.$store.commit('ADDGOODSLOOG', logo)
    }
  }

}
</script> 
<style scoped lang="less">
/deep/.van-cell__value {
  flex: unset;
}
.goods {
  position: relative;
  width: 355px;
  height: 130px;
  // margin: 0 auto;
  border-radius: 6px;
  margin: 10px;
  box-shadow: 0px 2px 8px rgba(142, 142, 142, 0.1);
  opacity: 1;

  .img {
    display: flex;
    align-items: center;
    padding: 0 12px 0 0;
    img {
      width: 130px;
      height: 100%;
    }
  }

  .title {
    padding: 5px 10px 0 0;
    width: 215px;
    /deep/:nth-child(1) {
      font-size: 15px;
      color: #333;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    :nth-child(2) {
      font-size: 12px;
      color: #919191; 
      line-height:20px;
      overflow: hidden;
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;
      display: -webkit-box;
    }
  }

  .label {
    // padding-bottom: 40px;
    :nth-child(1) {
      display: inline-block;
      width: 45px;
      height: 18px;
      text-align: center;
      background: #3FD2F6;
      opacity: 1;
      border-radius: 2px;
      font-size: 10px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #fff;
    }
    :last-child {
      display: inline-block;
      text-align: center;
      // width: 66px;
      // height: 14px;
      font-size: 10px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 18px;
      color: #40D2F6;
      // opacity: 1;
      // width: 114px;
      padding: 0 5px;
      height: 18px;
      background: #EBFBFE;
      // opacity: 0.1;
      border-radius: 2px;
    }
  }

  .van-cell__value {
    position: absolute;
    right: 10px;
    bottom: 7px;
    .price {
      :first-child {
        display: inline-block;
        width: 91px;
        height: 24px;
        text-align: center;
        color: #fff;
        border-radius: 0px 10px 0px 10px;
        background-color: red;
        font-size: 12px;
      }
      :last-child {
        text-decoration:line-through;
        padding-left: 3px;
      }
    }
  }
}
</style>
