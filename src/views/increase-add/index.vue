<template>
<div class="increase-add">
  <van-nav-bar
    left-text="地址管理"
    left-arrow
    @click-left="$router.back()"
  />


  <div class="address-info">
    <header>一键导入微信地址</header>
    <van-cell-group class="field-wrap" :border="false">
      <van-field v-model="text" label="联系人" placeholder="请输入姓名"/>

      <van-field v-model="tel" type="digit" label="手机号码" placeholder="请输入11位手机号码"/>

      <van-field v-model="postalCode" type="digit" label="邮政编码" placeholder="所在地邮政编码(选填)"/>

      <van-cell @click="isShowArea=true" class="area-cell">
        <div slot="title" class="area-cell_val">
          <span>所在地区</span>
          <span>{{selected}}</span>
          <van-icon name="arrow" />
        </div>  
      </van-cell>

      <van-field v-model="address" label="详细地址" placeholder="如道路、门牌号、小区、楼栋号等"/>

      <van-cell>
        <div slot="title">默认地址</div>
        <van-switch slot="right-icon" v-model="checked" active-color="#ee0a24" inactive-color="#dcdee0" />
      </van-cell>
    </van-cell-group>
  </div>

  <div class="save-btn">
    <van-button type="danger" block round>保存</van-button>
  </div>


  <!-- 选择城市弹出层 -->
  <van-popup v-model="isShowArea" position="bottom" round closeable>
    <address-area :areaList="areaList" @onSelected="onSelected" />
  </van-popup>
  
</div>
</template>

<script>
import { areaList } from '@vant/area-data'     //mock城市列表
import addressArea from'./components/addressArea.vue'
export default {
  name: 'increaseAddIndex',
  props: {},

  components: {
    addressArea
  },

  data () {
    return {
      areaList,
      tel: '',
      text: '',
      postalCode: '',
      address: '',
      checked: true,
      isShowArea: false,
      selected:  ''
    }
  },

  computed: {},

  watch: {},

  created () {
  },

  mounted () {
  },

  methods: {
    onSelected(val) {
      this.isShowArea = false
      this.selected = val
    }
  }

}
</script> 
<style scoped lang="less">
.van-cell {
  padding: 10px 0;
}

.increase-add {
  .address-info {
    background: #FFFFFF;
    opacity: 1;
    border-radius: 5px;
    padding: 10px;
    margin: 0 10px;
    header {
      width: 340px;
      height: 30px;
      line-height: 25px;
      background: #FFFFFF;
      border: 1px solid #eee;
      opacity: 1;
      border-radius: 2px;
      font-size: 12px;
      color: #FF273D;
      text-align: center;
      margin: auto;
      font-weight: 700;
    }

    .field-wrap {
      .van-switch {
        width: 48px;
        height: 24px;
        font-size: 24px;
      }
      .area-cell {
        .area-cell_val {
          display: flex;
          justify-content: space-between;
          align-items: center;
          :nth-child(2) {
            display: block;
            width: 260px;
            padding-left: 40px;
          }
        }
      }
    }
  }

  .save-btn {
      position: fixed;
      left: 10px;
      right: 10px;
      bottom: 10px;
    }
}
</style>
