<template>
  <div class="container newGoodsContainer">
    <module-title>
      <div class="left">新品首发</div>
      <a class="right" href>
        更多
        <i class="icon"></i>
      </a>
    </module-title>
    <div class="m-indexItem m-goodGrid">
        <good-list :newItemList="newItemList"></good-list>
    </div>
  </div>
</template>


<script>
import moduleTitle from "components/base-module-title/module-title.vue";
import goodList from "components/base-goodList/goodList.vue";
export default {
  name: "NewGoods",
  props:{
    newItemList:Array
  },
  data(){
    return{
      goodlist:[0,1,2,3,4,5],
      txtObj:["","明星商品日"]
    }
  },
  components: {
    moduleTitle,
    goodList
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';
@import '../../common/stylus/color.styl';
@import '../../common/stylus/font_size.styl';

.newGoodsContainer {
  .left {
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

  .m-goodGrid {
    padding-left: 10px;
    background-color: #fff;
  }
}
</style>
