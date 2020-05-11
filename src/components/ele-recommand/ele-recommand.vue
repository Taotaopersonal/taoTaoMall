<template>
  <div class="container recommandContainer">
    <module-title class="recommandTitle">
      <div class="left">人气推荐</div>
      <a class="right" href>
        更多
        <i class="icon"></i>
      </a>
    </module-title>
    <a href class="spItem">
      <div class="wraper">
        <div class="img">
          <img
            src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
            alt
          />
        </div>
      </div>
      <div class="detail">
        <tool-tag txt="母亲节特惠"></tool-tag>
        <div class="name">15分钟快速救脸，射频多功能美容仪</div>
        <div class="desc">掌心里的“美容院”</div>
        <div class="price">
          ¥
          759
        </div>
      </div>
    </a>
    <div class="goodGird">
      <good-list :newItemList="newItemList"></good-list>
    </div>
  </div>
</template>

<script>
import moduleTitle from "components/base-module-title/module-title.vue";
import goodList from "components/base-goodList/goodList.vue";
import toolTag from "components/tool-tag/tag.vue";

export default {
  name: "Recommand",
  props: {
    newItemList: Array
  },
  components: {
    moduleTitle,
    goodList,
    toolTag
  }
};
</script>

<style scoped lang='stylus'>
@import '../../common/stylus/mixin.styl';
@import '../../common/stylus/color.styl';

.recommandContainer {
  .recommandTitle {
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
  }

  .spItem {
    color: #333;
    width: 690px;
    height: 280px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    background: #FEF0DF;
    border-radius: 4px;
    margin: 0 30px 20px;

    .wraper {
      bg-image(spItem_bg, webp);
      width: 280px;
      height: 280px;
      margin-right: 30px;

      .img {
        width: 100%;
        height: 100%;

        img {
          display: inline;
          width: 100%;
          height: auto;
        }
      }
    }

    .detail {
      .name {
        font-family: PingFangSC-Regular;
        font-size: 28px;
        width: 350px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .desc {
        font-size: 24px;
        color: #7F7F7F;
        width: 350px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .price {
        font-size: 28px;
        color: $color_1;
      }
    }
  }

  .goodGird {
    padding-left: 10px;
    background-color: #fff;
  }
}
</style>
