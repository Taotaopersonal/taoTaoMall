<template>
  <div class="container flashSaleContainer">
    <module-title>
      <div class="left">
        限时购
        <count-down v-if="flashSaleModule" class="countDown" :remainTime="flashSaleModule.remainTime"></count-down>
      </div>
      <a class="right" href>
        更多
        <i class="icon"></i>
      </a>
    </module-title>
    <div class="cnt" v-if="flashSaleModule">
      <div v-for="(item, index) in flashSaleModule.itemList" :key="index" class="flashSaleItem">
        <div class="imgWrap">
          <img
            :src="item.picUrl"
            class="img"
          />
        </div>
        <div class="price">
          <span class="actualPrice">¥{{item.activityPrice}}</span>
          <span class="retailPrice">¥{{item.originPrice}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moduleTitle from "components/base-module-title/module-title.vue";
import countDown from "components/base-countDown/countDown.vue";
export default {
  name: "FlashSale",
  props:{
    flashSaleModule:Object
  },
  data() {
    return {
      name:"FlashSale"
    };
  },
  components: {
    moduleTitle,
    countDown
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';
@import '../../common/stylus/color.styl';
@import '../../common/stylus/font_size.styl';

.flashSaleContainer {

  .left {
    .countDown {
      margin-left: 10px;
    }

    float: left;
  }

  .right {
    float: right;
    display: block;
    font-size: 28px;
    color: #333;
    line-height: 100px;

    .icon {
      display: inline-block;
      margin: -5px 0 0 8px;
      bg-image(right_arrow, webp);
      vertical-align: middle;
      background-repeat: no-repeat;
      width: 13px;
      height: 23px;
    }
  }
  
  .cnt{
    overflow hidden
    padding 0 10px 0 30px
    .flashSaleItem{
      display block
      color #333
      float left
      margin-right 20px
      padding-bottom 30px
      .imgWrap{
        width 216px
        height 216px
        background-color #f5f5f5
        border-radius 4px /* px */
        margin-bottom 12px
        img{
          display block
          width 100%
          height 100%
        }
      }
      .price{
        padding-left 20px
        .actualPrice{
          font-size $font_1
          color $color_1
          margin-right 12px
        }
        .retailPrice{
          font-size $font_2
          color #7f7f7f
          text-decoration line-through
        }
      }
    }
  }
}
</style>
