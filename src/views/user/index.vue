<template>
<div class="user-container">
  <!-- 用户信息块 -->
  <van-cell-group class="user-info-wrap" v-if="userInfo">
    <van-cell class="user-info" center :border="false">
      <!-- 头像 -->
      <van-image
        class="user-avatar"
        slot="icon"
        round
        fit="cover"
        :src="userInfo.file"
      />
      <!-- 昵称 -->
      <div class="user-name" slot="title">{{userInfo.username}}</div>
      <!-- 手机号 -->
      <div class="user-phone" slot="label">{{userInfo.phone}}</div>
    </van-cell>
  </van-cell-group>

  <!-- 未登录显示 -->
  <div class="not-login-wrap" v-else>
    <div 
      class="logo">
      <van-image
        width="70px"
        height="70px"
        fit="cover"
        round
        src="https://img1.baidu.com/it/u=289538718,2137491427&fm=26&fmt=auto&gp=0.jpg"
        @click="$router.push({name: 'login'})"
      />
      <p>点击登录</p>
    </div>
  </div>

  <!-- 单元格 -->
  <van-cell-group class="cell-wrap">
    <van-cell class="iconfont ice-Frame1" title="地址管理" is-link to="address" />
    <van-cell class="iconfont ice-qianbao" title="我的钱包" is-link to="" />
    <van-cell class="iconfont ice-gonglve" title="U先攻略" is-link to="" />
    <van-cell class="iconfont ice-libaozhongxin" title="推荐有礼" is-link to="" :border="false"/>
    <van-cell class="iconfont ice-fuwudingdanxiangqing-kefu" title="联系客服" is-link to="" />
    <van-cell class="iconfont ice-gongzhonghao" title="公众号" is-link to="" />
    <van-cell class="iconfont ice-qingchuhuancun" title="清除缓存" is-link to="" :border="false"/>
  </van-cell-group>

</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'userIndex',
  props: {},

  components: {},

  data () {
    return {}
  },

  computed: {
    ...mapState(['userInfo'])
  },

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

[class*=van-hairline]::after {  //去除边框
  border: unset;
}

.user-container {
  position: relative;
  .user-info-wrap {
    height: 221px;
    background: url('../../assets/image/user/banner3.png') no-repeat;
    background-size: cover;
    border-radius: 0 0 20px 20px;
    .user-info {
      background: unset;
      padding-top: 64px; 
      .user-avatar {
        width: 70px;
        height: 70px;
      }
      .user-name,.user-phone {
        color: #fff;
        margin-left: 16px;
      }
      .user-name {
        font-size: 20px;
        font-weight: 700;
        padding-bottom: 5px;
      }
    }
  }


  .cell-wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: 142px;
    margin: 10px;
    padding: 6px;
    border-radius: 20px;
    >.van-cell {
      padding-left: 5px;
      padding-right: 5px;
    }
    .van-cell__title {
      padding-left: 10px;
    }
  }
  
  .unlogin {
    border: unset;
    position: relative;
    top: 8rem;
    left: 46px;
    width: 280px;
  }
}

// 未登录
.not-login-wrap {
  background: url('../../assets/image/user/banner3.png') no-repeat;
  background-size: cover;
  width: 375px;
  height: 221px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    >p {
      padding-top: 10px;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }

}

</style>
