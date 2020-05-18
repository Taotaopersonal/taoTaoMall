<template >
  <div class="swiper-container" ref="swiperContainer">
    <van-swipe class="swiper-wrapper" :stop-propagation="false" :lazy-render="true">
      <van-swipe-item  v-for="(item, index) in focusList" :key="index" class="swiper-slide">
        <a :href="item.targetUrl">
          <img v-lazy="item.picUrl" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// 懒加载组件
// import Vue from "vue";
// import { Lazyload } from "vant";
// Vue.use(Lazyload, {
//   error: "@/assets/logo.png"
// });
import { Swipe, SwipeItem } from "vant";

export default {
  name: "Swiper",
  props: {
    focusList: Array
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>

<style scoped lang="stylus">
.swiper-container {
  width: 100%;
  height: 100%;

  .swiper-wrapper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      position: relative;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    /deep/.van-swipe__indicators{
      .van-swipe__indicator{
        width 40px
        height 2px
        background-color rgba(255,255,255,1)
        border-radius 0
      }
    }
  }
}
</style>
