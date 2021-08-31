<template>
<div>
  <van-area 
    :area-list="areaList"
    @confirm="onSelected" 
    confirm-button-text="保存"
  />

  <!-- <van-button 
    type="danger" 
    block 
    round 
    class="save-btn" 
    @click="closePopup"
    >
    保存
  </van-button> -->
</div>
</template>

<script>
export default {
  name: 'addressArea',
  props: {
    areaList: {
      type: Object,
      require: true
    }
  },

  components: {},

  data () {
    return {
      
    }
  },

  computed: {},

  watch: {},

  created () {
  },

  mounted () {
  },

  methods: {
    // 点击保存触发函数
    closePopup() {
      
    },

    // 点击保存按钮触函数
    onSelected(val) {
      this.selected = val
      let res = `${val[0].name}-${val[1].name}-${val[2].name}`
      this.$emit('onSelected', res)
    }
  }

}
</script> 
<style scoped lang="less">
.van-area {
  /deep/.van-picker__toolbar {
    .van-picker__cancel {
      color: #fff;
    }
    .van-picker__confirm  {
      width: 350px;
      height: 40px;
      background: #EE0A24;
      border-radius: 20px;
      color: #fff;
      z-index: 999;
      position: fixed;
      left: 0;
      margin: auto;
      right: 0;
      bottom: 5px;

    }
  }
}
.save-btn {
  width: 350px;
  margin: 0 auto 10px;
}

</style>
