<template>
<van-cell class="goods" to="/details">
  <div slot="icon" class="img">
    <img src="../../assets/image/sliding/mm.jpg" />
  </div>

  <div slot="title" class="title">
    <p>{{goods.title}}</p>
    <p>{{goods.label}}</p>  
  </div>

  <div slot="label" class="label">
    <span>专享试</span>
    <span>{{goods.people_buy}}</span>
  </div>

  <div class="price">
    <span>试用价￥{{goods.price}}</span>
    <span>￥{{goods.old_price}}</span>
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

  methods: {},

}
</script> 
<style scoped lang="less">
/deep/.van-cell__value {
  flex: unset;
}
.goods {
  position: relative;
  width: 355px;
  height: 116px;
  // margin: 0 auto;
  border-radius: 6px;
  margin: 10px;
  box-shadow: 0px 2px 8px rgba(142, 142, 142, 0.1);
  opacity: 1;

  .img {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      width: 93px;
      height: 59px;
    }
  }

  .title {
    padding-top: 10px;
    &:nth-child(1) {
      font-size: 15px;
      color: #333;
    }
    :nth-child(2) {
      font-size: 12px;
      color: #919191;
    }
  }

  .label {
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
