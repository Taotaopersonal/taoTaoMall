<template >
  <ul class="list">
    <li class="item" v-for="(item, index) in newItemList" :key="index">
      <div class="good">
        <div class="hd">
          <div class="wraper">
            <div class="img">
              <img v-lazy="item.listPicUrl" alt />
            </div>
          </div>
        </div>
        <div class="name">{{item.name}}</div>
        <div class="price">
          <span class="priceInner">
            <span>
              ¥
              {{item.retailPrice}}
            </span>
            <tool-tag v-if="index === 2" txt="母亲节特惠"></tool-tag>
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import toolTag from "components/tool-tag/tag.vue";

export default {
  name: "GoodList",
  props: {
    newItemList: Array
  },
  components: {
    toolTag
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';
@import '../../common/stylus/color.styl';

.list {
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;

  .item {
    width: 216px;
    margin-left: 20px;
    height: auto;
    padding: 0 0 13px 0;

    .good {
      display: block;
      width: 100%;

      .hd {
        .wraper {
          position: relative;
          background-color: #f5f5f5;
          margin-bottom: 12px;

          .img {
            width: 100%;

            img {
              display: block;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #f5f5f5;
            }
          }
        }
      }

      .name {
        margin-top: 0;
        padding: 0;
        font-size: 24px;
        white-space: normal;
        line-height: 36px;
        margin-top: 16px;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #333;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        word-break: break-all;
      }

      .price {
        font-size: 32px;
        line-height: 48px;
        color: $color_1;
        text-align: left;
        font-family: PingFangSC-Regular;
      }
    }
  }
}
</style>
