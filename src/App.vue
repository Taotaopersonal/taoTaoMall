<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 底部固定导航区 -->
    <ele-navigator v-show="$route.meta.showFooter"></ele-navigator>
  </div>
</template>

<script>
import navigator from "components/ele-navigator/ele-navigator.vue";

export default {
  name: "App",
  components: {
    "ele-navigator": navigator
  }
};
</script>

<style scoped lang="stylus">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
