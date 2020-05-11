<template>
  <div class="container hotSellContainer">
    <module-title class="hotSellTitle">
      <div class="left">类目热销榜</div>
    </module-title>
    <div class="content" v-if="categoryList">
      <div class="line1">
        <div class="item-1">
          <a :href="categoryList[0].targetUrl">
            <div class="wrap">
              <div class="name">
                <span class="txt">{{categoryList[0].categoryName}}</span>
              </div>
            </div>
            <div class="imgWrap">
              <div class="img">
                <img :src="categoryList[0].picUrl" alt />
              </div>
            </div>
          </a>
        </div>
        <div class="item-2">
          <a :href="categoryList[1].targetUrl">
            <div class="wrap">
              <div class="name">
                <span class="txt">{{categoryList[1].categoryName}}</span>
              </div>
            </div>
            <div class="imgWrap">
              <div class="img">
                <img :src="categoryList[1].picUrl" alt />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="line2">
        <div class="item" v-for="(item, index) in categoryList.slice(2)" :key="index">
          <a :href="item.targetUrl">
            <div class="name">{{item.categoryName}}</div>
            <div class="imgWrap">
              <div class="img">
                <img :src="item.picUrl" alt />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moduleTitle from "components/base-module-title/module-title.vue";

export default {
  name: "HotSell",
  props: {
    categoryList: Array
  },
  components: {
    moduleTitle
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';

.hotSellContainer {
  .hotSellTitle {
    .left {
      float: left;
    }
  }

  .content {
    padding: 0 20px 20px 30px;
    overflow: hidden;

    .line1 {
      standard-flex();

      .item-1, .item-2 {
        position: relative;
        background-color: #F9F3E4;
        width: 340px;
        height: 200px;
        margin: 0 10px 10px 0;

        .wrap {
          .name {
            position: relative;
            padding-left: 24px;
            color: #333;
            font-family: PingFangSC-Medium;
            font-size: 28px;
            margin-top: 66px;
            z-index: 5;

            .txt {
              display: inline-block;
              position: relative;

              &:before {
                content: '';
                position: absolute;
                left: 0;
                bottom: -14px;
                width: 48px;
                height: 4px;
                background: #333;
              }
            }
          }
        }

        .imgWrap {
          position: absolute;
          right: 0;
          top: 0;
          width: 200px;
          height: 200px;

          .img {
            img {
              display: inline;
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      .item-2 {
        background: #EBEFF6;
      }
    }

    .line2 {
      display: flex;
      flex-flow: row wrap;

      .item {
        display: block;
        width: 165px;
        height: 180px;
        background-color: #F5F5F5;
        border-radius: 4px;
        margin: 0 10px 10px 0;

        .name {
          margin-top: 10px;
          text-align: center;
          font-size: 24px;
          font-family: PingFangSC-Medium;
        }

        .imgWrap {
          width: 120px;
          height: 120px;
          margin: 2px 0 0 23px;

          .img {
            width: 100%;
            height: 100%;

            >img {
              display: inline;
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }
}
</style>
