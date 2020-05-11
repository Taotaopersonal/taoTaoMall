<template>
  <footer id="bottomNav">
    <nav class="bottomNav">
      <div
        class="item"
        :class="{active:currentIndex === 1}"
        @click="$router.replace('/home');currentIndex = 1"
      >
        <div class="iconfont icon-shouye1"></div>
        <span class="txt">首页</span>
      </div>
      <div
        class="item"
        :class="{active:currentIndex === 2}"
        @click="$router.replace('/categroy');currentIndex = 2"
      >
        <div class="iconfont icon-fenlei"></div>
        <span class="txt">分类</span>
      </div>
      <div
        class="item"
        :class="{active:currentIndex === 3}"
        @click="$router.replace('/worthBuying');currentIndex = 3"
      >
        <div class="iconfont icon-gouwu"></div>
        <span class="txt">值得买</span>
      </div>
      <div
        class="item"
        :class="{active:currentIndex === 4}"
        @click="$router.replace('/cart');currentIndex = 4"
      >
        <div class="iconfont icon-gouwuche"></div>
        <span class="txt">购物车</span>
      </div>
      <div
        class="item"
        :class="{active:currentIndex === 5}"
        @click="$router.replace('/profile');currentIndex = 5"
      >
        <div class="iconfont icon-wode"></div>
        <span class="txt">个人</span>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Navigator",
  data() {
    return {
      currentIndex: 1
    };
  }
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
