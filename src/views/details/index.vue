<template>
<div class="goods-details">
  <!-- //!轮播图 -->
  <carousel :commodityLogo="goodsDetail.commodity_logo_list"/>

  <!-- //!广告层 -->
  <ad :goodsDetail="goodsDetail"/>

  <!-- //!商品图片 -->
  <div class="goods-detail-img" v-html="newDetailImg"></div>


  <!-- //!领取按钮 -->
  <van-button 
    class="receive-btn" 
    type="danger" 
    round 
    block 
    @click="isShowDialog = !isShowDialog"
    >马上领取
  </van-button>

  <!-- //!返回箭头按钮 -->
  <van-icon class="arrow-left" name="arrow-left" @click="$router.back()" />

  <!-- //!领取弹出层 -->
  <div class="receive-dialog" v-if="isShowDialog">
    <img src="../../assets/image/details/main.png" />
  <div class="q">
    <h2>开心领取</h2>
    <p>(复制地址)</p>
    <div class="inside-box">
      <div class="input">
        <span>http://www.bilibili.com</span>
        <button>复制</button>
      </div>

      <ul class="step">
        <li v-for="(item,index) in step" :key="index" >{{item}}</li>
      </ul>

      <van-button 
        class="copy-btn" 
        type="danger" 
        round 
        block
        @click="addCart(goodsDetail.commodity_id,goodsLogo, goodsDetail.commodity_name,goodsDetail.commodity_price)"
        >
        复制并领取
      </van-button>
    </div>
  </div>  
  </div>
</div>
</template>

<script>
import carousel from './components/carousel.vue'
import ad from './components/ad.vue'
import {goodsDetails} from '@/api/home'
import {mapState} from 'vuex'
export default {
  name: 'detailsIndex',
  props: {
    // 动态商品id（路由映射）
    goodsId: {
      type: String,
      require: true
    }
  },

  components: {
    carousel,
    ad,

  },

  data () {
    return {
      isShowDialog: false,
      step: [ 
        "1.点击复制按钮",
        "2.打开手机浏览器",
        "3.粘贴地址到浏览器导航栏并打开"
      ],
      // 商品详情
      goodsDetail:{},
      // 商品图片
      newDetailImg: ''

    }
  },

  computed: {
    ...mapState(['goodsLogo'])
  },

  watch: {},

  created () {
    this.loadGoodsDetails()
  },

  mounted () {
  },

  methods: {
    // 获取商品详情
    async loadGoodsDetails() {
      const {data} = await goodsDetails(this.goodsId)
      // 后端返回的是一个html格式，需要将多余的字符去除
      this.newDetailImg = data.data.data.detail.replace('<p><br></p>', '')
      // 将商品详情保存到data
      this.goodsDetail = data.data.data
    },

    // 添加购物车
    addCart(id,logo,name,price) {
      this.$store.commit('ADDCARTLIST',{id,logo,name,price})
      this.isShowDialog = false
      this.$toast.success({message: '领取成功'})
      
    }

  }

}
</script> 
<style scoped lang="less">
.goods-details {
  background: #F0F0F0;
  .receive-btn {
    width: 355px;
    margin: auto;
    position: fixed;
    bottom: 5px;
    left: 0;
    right: 0;
  }

  .arrow-left {
    position: fixed;
    top: 35px;
    left: 10px;
    font-size: 25px;
    color: #000;
  }


  // 商品详情图片
  /deep/.goods-detail-img {
    width: 365px;
    margin: auto;
    >p {
      :first-child {
        border-radius: 10px 10px 0px 0px;
      }
      >img {
        width: 100%;
        
      }
    }
  }



  .receive-dialog {
    width: 290px;
    // height: 399px;
    border-radius:20px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    >img {
      width: 100%;
      height: 100%;
    }
    .q {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    >h2 {
      // width: 144px;
      // height: 50px;
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #FFFFFF;
      opacity: 1; 
      margin-top: 10px;
      text-align: center; 
    }
    >p {
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 42px;
    color: #FFFFFF;
    opacity: 1;
    text-align: center; 
    }

    .inside-box {
      width: 268px;
      height: 288px;
      background: #FFFFFF;
      box-shadow: 0px 3px 6px rgb(0 0 0 / 16%);
      opacity: 1;
      border-radius: 12px;
      margin: auto;
      padding: 25px 14px 16px;
      .input {
        font-size: 16px;
        width: 240px;
        height: 40px;
        border: 1px solid #EF293D;
        opacity: 1;
        border-radius: 37px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >button {
          width: 52px;
          height: 41px;
          background: #EF293D;
          opacity: 1;
          border-radius: 28px;
          border: none;
          color: #FFFFFF;
        }
        >span {
          line-height: 15px;
          width: 150px;
          word-wrap: break-word;
          word-break: break-all;
          color: #EF293D;
          margin-left: 20px;
          text-align: center;
        }
      }

      .step {
        margin: 30px 0;
        font-size: 15px;
        line-height: 2em;
      }

      .copy-btn {
        width: 169px;
        height: 40px;
        background: #FF273D;
        opacity: 1;
        border-radius: 20px;
        margin: auto;
      }
    }
  } 
  }
}

</style>
