<template>
  <div class="tagWraper">
    <span class="gradientPrice">{{txt}}</span>
  </div>
</template>

<script>
export default {
  name: "tag",
  props:{
    txt:String
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';
@import '../../common/stylus/color.styl';

.tagWraper {
  width: 350px;
  height: 33px;
  margin-bottom: 9px;
  margin: 0 0 9px;
  overflow: hidden;

  .gradientPrice {
    margin-bottom: 50px;
    height: 30px;
    padding: 0 8px;
    line-height: 30px;
    color: $color_1;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid $color_1; /* px */
    border-radius: 15px;
    margin-left: 1px;
    white-space: nowrap;
    font-size: 18px;
    vertical-align: top;
    display: inline-block;
    text-align: center;

    &:nth-child(1) {
      margin-left: 0;
    }

    &:before {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      width: 0;
    }
  }
}
</style>
