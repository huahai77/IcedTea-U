<template>
<div class="home-container">
  <!--//! 轮播图 -->
  <van-swipe :autoplay="3000" indicator-color="#DC143C">
    <van-swipe-item 
      v-for="item in carousel" 
      :key="item.id"
    >
      <img v-lazy="item.img_url" @click="jumpDetails(item)"/>
    </van-swipe-item>
  </van-swipe>

  <!--//! 广告定位层 -->
  <div class="advertising" ref="advertisingRef">
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

  <!--//! 商品列表 -->

    <!-- //!滑动页标题 -->
    <div v-show="isShowTitle" class="home-title"><img src="../../assets/image/sliding/nav-title.png" /></div>
    <!-- //*商品导航栏 -->
    
    <van-tabs v-model="active" background="#F0F0F0" class="goods-nav" ref="tabsRef">
      <van-tab 
        :title="category.category_name" 
        v-for="category in categories" 
        :key="category.category_id"
      >
        <!-- 商品列表项子组件 -->
        <good-list :category="category"/>
      </van-tab>
    </van-tabs>

</div>
</template>

<script>
import goodList from './components/goodList.vue'
import {carousel,categories} from '@/api/home'
export default {
  name: 'homeIndex',
  props: {},

  components: {
    goodList
  },

  data () {
    return {
      // 轮播图
      carousel: [],
      // 商品分类
      categories: [],
      // 默认激活
      active: 0,
      // 广告定位层到顶部的距离
      offsetTop: 0,
      // 控制navTitle的显示状态
      isShowTitle: false,
      // 
      homeList: [],
    }
  },

  computed: {},

  watch: {},

  created () {
    // this.getGoodsData()
    this.loadCarousel()
    this.loadCategories()
  },

  mounted () {
    // 
    this.offsetTop = this.$refs.advertisingRef.offsetTop
    // console.log(this.offsetTop)
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    // 冰茶U先标题吸顶
    handleScroll (e) {
      // console.log(document.documentElement.scrollTop)
      if(document.documentElement.scrollTop > this.offsetTop) {  
        this.isShowTitle = true
        
      }else if(document.documentElement.scrollTop < this.offsetTop) {
        this.isShowTitle = false
      }
    },

    
    // 获取轮播图
    async loadCarousel() {
      try {
        const {data} = await carousel()
        this.carousel = data.data
      } catch (err) {
        throw "请求发生错误"
      }
    },
    // 获取商品分类
    async loadCategories() {
      try {
        const {data} = await categories()
        // console.log(data)
        this.categories = data.data
      } catch (error) {
        throw "请求发生错误"
      }
    },

    // 轮播图跳转
    jumpDetails(item) {
      if(item.type==1) {
        this.$router.push(`/details/${item.redirect}`)
      }else if(item.type==2) {
        this.$router.push(`/details/${item.redirect}`)
      }
    }

  }

}
</script> 
<style scoped lang="less">

.home-container {
  background: #F0F0F0;
  // position: fixed;
  //   left: 0;
  //   right: 0;
  //   bottom: 50px;
  //   overflow-y: auto;
  //   top: 0;
  margin-bottom: 50px;
  .van-swipe {
    position: relative;
    height: 262px;
    .van-swipe-item {
      >img {
        width:100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    /deep/.van-swipe__indicators {
      position: absolute;
      left: 50%;
      bottom: 50px;
    }
  }
  /deep/.van-swipe__indicator {
    background: #fff;
    opacity: 1;
  }

  .advertising {
    width: 355px;
    height: 58px;
    background: #fff;
    opacity: 1;
    border-radius: 6px;
    margin: 0 auto;
    position: absolute;
    left: 10px;
    /* right: 10px; */
    top: 225px;
    padding: 11px 26px 8px 25px;
    box-sizing: border-box;
    i {
      color: #FF273D;
    }
    span {
      font-size: 12px;
      color: #FF273D;
      font-weight: 900;
      margin-left: -45px;
    }
    .text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
    }

    .title {
      // width: 300px;
      // height: 16px;
      font-size: 11px;
      font-family: PingFang SC;
      font-weight: 400;
      // line-height: 16px;
      color: #919191;
      opacity: 1;
      text-align: center;
      margin: 6px 10px 8px 10px;
      box-sizing: border-box;
    }
  }

  .van-tabs {
    margin-top: 25px;
  }

  .goods-nav {
    /deep/.van-tabs__line {
      background-color: pink;
      height: 5px;
      bottom: 20px;
    }
  }

  .home-title {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
    // width: 375px;
    >img {
      width: 100%;
    }
  }
}

</style>
