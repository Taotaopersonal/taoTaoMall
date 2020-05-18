<template>
  <footer id="bottomNav">
    <nav class="bottomNav">
      <div class="item" :class="{active:1 ===  $route.meta.id}" @click="$router.replace('/home');">
        <div class="iconfont icon-shouye1"></div>
        <span class="txt">首页</span>
      </div>
      <div
        class="item"
        :class="{active:2 ===  $route.meta.id}"
        @click="$router.replace('/categroy');"
      >
        <div class="iconfont icon-fenlei"></div>
        <span class="txt">分类</span>
      </div>
      <div
        class="item"
        :class="{active:3 ===  $route.meta.id}"
        @click="$router.replace('/worthBuying');"
      >
        <div class="iconfont icon-gouwu"></div>
        <span class="txt">值得买</span>
      </div>
      <div class="item" :class="{active:4 === $route.meta.id}" @click="$router.replace('/cart');">
        <div class="iconfont icon-gouwuche"></div>
        <span class="txt">购物车</span>
      </div>
      <div
        class="item"
        :class="{active:5 ===  $route.meta.id}"
        @click="$router.replace('/profile');"
      >
        <div class="iconfont icon-wode"></div>
        <span class="txt">个人</span>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Navigator"
};
</script>

<style scoped lang='stylus'>
@import '../../common/stylus/color.styl';

#bottomNav {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ccc; /* px */

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 98px;
    background-color: #fff;

    .item {
      width: 15%;
      text-align: center;

      .iconfont {
        font-size: 43px;
        font-weight: 600;
        margin-bottom: -8px;
      }

      .txt {
        font-size: 22px;
        font-weight: 600;
      }

      &.active {
        color: $color_1;
      }
    }
  }
}
</style>
