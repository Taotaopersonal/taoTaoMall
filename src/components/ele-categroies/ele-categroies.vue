<template>
  <div class="goodCategories">
    <div class="cateWrap">
      <a v-for="(item, index) in kingKongList" :key="index" class="cateItem" :href="item.schemeUrl">
        <div class="icon">
          <img :src="item.picUrl" />
        </div>
        <div class="txt" :style="{color:'#'+item.textColor}">{{item.text}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodCategroies",
  props:{
    kingKongList: Array
  }
};
</script>

<style scoped lang="stylus">
.goodCategories {
  width: 100%;
  height: 372px;
  background-color #fff

  .cateWrap {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 100%;
    height: auto;

    .cateItem {
      width: 110px;
      height: 156px;
      margin: 10px 20px 9px 20px;

      .icon {
        width: 110px;
        height: 110px;
        border-radius 30px
        overflow hidden
       
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .txt{
        color: rgb(51, 51, 51);
          margin-top: 10px;
          font-size: 24px;
          text-align: center;
          line-height: 36px;
          white-space: nowrap;
      }
    }
  }
}
</style>
