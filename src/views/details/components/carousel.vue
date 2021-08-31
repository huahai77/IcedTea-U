<template>
<div class="carousel">
<van-swipe @change="onChange" :autoplay="3000">
    <van-swipe-item v-for="(image, index) in commodityLogo" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
    <template #indicator>
      <div class="custom-indicator">{{ current + 1 }}/{{commodityLogo.length}}</div>
    </template>
  </van-swipe>
</div>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    commodityLogo: {
      type: Array,
      default: () => []
    }
  },

  components: {},

  data () {
    return {
      // 当前指示器下标
      current: 0,
    }
  },

  computed: {},

  watch: {},

  created () {
  },

  mounted () {
    
  },

  methods: {
    // 轮播图滑动
    onChange(index) {
      this.current = index;
    },
  },

}
</script> 
<style scoped lang="less">
.carousel {
  height: 330px;
// 自定义轮播图指示器
.custom-indicator {
    position: absolute;
    right: 20px;
    bottom: 40px;
    font-size: 12px;
    background: #666;
    width: 33px;
    height: 18px;
    text-align: center;
    opacity: 0.8;
    color: #fff;
    border-radius: 10px;
}


  .van-swipe {
    height: 330px;
    .van-swipe-item {
      img {
        width: 375px;
        height: 100%;
      }
    }
  }

  

}
</style>
