<template>
  <div class="topSearchIpt">
    <i class="icon"></i>
    <span class="placeholder">搜索商品,共{{totalNumbersOfProducts}}款好物</span>
  </div>
</template>

<script>
export default {
  name: "Search",
  props:{
    totalNumbersOfProducts:Number
  }
};
</script>

<style scoped lang='stylus'>
@import '../../common/stylus/mixin.styl';
@import '../../common/stylus/color.styl';
  .topSearchIpt
    display flex
    flex-flow row nowrap
    justify-content center
    align-items center
    flex-grow 1   
    /* width 442px */
    height 56px
    font-size 28px
    background-color rgb(237, 237, 237)
    border-radius 8px
    .icon
      display inline-block
      vertical-align middle
      width 28px
      height 28px
      margin-right 10px
      background url('./img/icon.webp')
      background-size 100% 100%
    .placeholder
      color #666
</style>
