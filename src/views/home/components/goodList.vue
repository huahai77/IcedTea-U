<template>
<div class="good-list">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <goods-item v-for="goods in goodsList" :key="goods.commodity_id" :goods="goods"/>
  </van-list>
</div>
</template>


<script>
import goodsItem from '@/components/goods-item/goodsItem.vue'
import {goodsList} from '@/api/home'
export default {
  name: 'goodList',
  props: {
    // 频道
    category: {
      type: Object,
      require: true
    }

  },

  components: {
    goodsItem
  },

  data () {
    return {
      goodsList: [],
      loading: false, // 控制加载中的 loading 状态
      finished: false,// 控制加载结束的状态，当加载结束，不再触发加载更多
      page: 1,  //页码 
      limit: 5, //每页条数
    }
  },

  computed: {},

  watch: {},

  created () {

  },

  mounted () {

  },

  methods: {

    // 上拉触发加载
    async onLoad() {
      const {data} = await goodsList({
        page: this.page, //页数
        limit: this.limit,  //每页条数
        category_id: this.category.category_id //分类ID
      })
      // console.log(data)
      // 将数据push进list数组
      const {items} = data.data
      
      this.goodsList.push(...items)

      // 设置本次加载状态结束
      this.loading = false

      // 判断是否还有数据
      if(items.length) {
        this.page++
      } else {
        // 数据全部加载完成
        this.finished = true
      }

    }

  }
}
</script> 
<style lang="less" scoped>
.van-cell {
  padding: 0;
}
.good-list {
  /deep/ .van-tabs__line {
    background-color: #fff;
  }
}
</style>
