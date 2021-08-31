<template>
<div class="login-container">
  <!-- 导航栏 -->
  <van-nav-bar
    class="login-nav"
    title="登录"
    left-arrow
    @click-left="$router.back()"
  />

  <!-- 登录表单 -->
  <van-form
    @submit="onLogin"
    @failed="onFaild"
    validate-first
    ref="formRef"
  >
    <van-field
      v-model="user.username"
      clearable
      name="username"
      center
      left-icon="manager"
      placeholder="请输入用户名"
      :rules="formRules.username"
    />
    <van-field
      v-model="user.phone"
      clearable
      name="phone"
      :rules="formRules.phone"
      left-icon="phone"
      placeholder="请输入手机号"
    />

      <!-- 登录按钮 -->
    <div class="btn-wrap">
      <van-button class="login-btn" type="danger" round block>登录</van-button>
    </div>
  </van-form>


</div>
</template>

<script>
// import {setStore} from '@/utils/strorage'
export default {
  name: 'loginIndex',
  props: {},

  components: {},

  data () {
    return {
      user: {
        username: '',
        phone: ''
      },
      // 表单验证规则
      formRules: {
        username: [
          {required: true, msssage: "请输入用户名"},
          {pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: "用户名格式错误"}
        ],
        phone: [
          {required: true, msssage: "请输入手机号"},
          {pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, message: "手机号不存在"}
        ]
      }
    }
  },

  computed: {},

  watch: {},

  created () {
  },

  mounted () {
  },

  methods: {
    // 提交登录触发函数
    async onLogin() {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const {data} = await this.$http.post('/api/login',this.user)
        if(data.code === 200) {
          this.$toast.success("登录成功")
          // let {username, id, token} = data
          // 存储到vuex
          this.$store.commit('SETUSERINFO', data)
          // 登录成功后跳转回原来页面
          this.$router.back()
        }
      } catch (error) {
        console.log(error)
        this.$toast.fail("登录失败，请检查用户名与手机号")
      }
    },
    onFaild() {

    }
  }

}
</script> 
<style scoped lang="less">
body {
  background: #F0F0F0;
}
.login-container {
  .login-nav {
    background: #F63940;
    /deep/.van-nav-bar__title  {
      color: #fff;
      font-weight: 900;
    }
    /deep/.van-icon-arrow-left::before {
      color: #fff;
    }
  }

  .field-wrap {
    margin-top: 20px;
  }

  .btn-wrap {
    padding: 26px 16px;
    .login-btn {
      border: none;
      .van-button__text {
        font-size: 15px;
      }
    }
  }
}

</style>
