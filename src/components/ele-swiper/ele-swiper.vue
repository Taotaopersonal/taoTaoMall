<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img data-src="holder.js/750x370" alt="300x500" />
      </div>
      <div class="swiper-slide">
        <img data-src="holder.js/750x370" alt="300x500" />
      </div>
      <div class="swiper-slide">
        <img data-src="holder.js/750x370" alt="300x500" />
      </div>
      <div class="swiper-slide">
        <img data-src="holder.js/750x370" alt="300x500" />
      </div>
      <div class="swiper-slide">
        <img data-src="holder.js/750x370" alt="300x500" />
      </div>
      <div class="swiper-slide">
        <img data-src="holder.js/750x370" alt="300x500" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  mounted() {
    this.renderSwiper();
  },
  methods: {
    renderSwiper() {
      this.$nextTick(() => {
        new this.Swiper(this.$refs.swiperContainer, {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
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
  }
}
</style>
