<template>
  <div id="app">
    <!-- 路由出口 -->
    <keep-alive :include="['homeIndex']">
      <router-view />
    </keep-alive>

    <!-- 限制tabBar的显示组件 -->
    <tab-bar v-if="$route.meta.isShowTabBar"/>
  </div>
</template>

<script>
import tabBar from '@/components/tab-bar/tabBar'
export default {
  name: 'App',
  components: {
    tabBar
  }
}
</script>

<style lang="less">

</style>
