<template>
<div class="address-container">
  <van-nav-bar
    left-text="地址管理"
    left-arrow
    @click-left="$router.back()"
  />

  <div class="address-img">
    <img :src="addressImg" />
    <h3>暂无地址信息</h3>
  </div>

  <div class="increase-ad-btn">
    <van-button type="danger" block round @click="$router.push('/increase-add')">+新增收货地址</van-button>
  </div>

</div>
</template>

<script>

export default {
  name: 'addressIndex',
  props: {},

  components: {

  },

  data () {
    return {
      addressImg: require('../../assets/image/address/address_icon.png'),

    }
  },

  computed: {},

  watch: {},

  created () {
  },

  mounted () {
  },

  methods: {

  }

}
</script> 
<style scoped lang="less">
.address-container {
  background: #F0F0F0;
  height: 100vh;
  position: relative;
  .address-img {
    position: absolute;
    left: 98px;
    top: 179px;
    img {
      width: 178px;
      height: 162px;
    }
    h3 {
      font-size: 12px;
      text-align: center;
      color: #999;
      padding-top: 20px;
    }
  }

  .increase-ad-btn {
    position: fixed;
    left: 10px;
    right: 10px;
    bottom: 10px;
  }


}
</style>
