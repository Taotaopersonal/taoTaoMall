<template>
  <div class="container sceneLightShoppingGuide">
    <div class="wrap" v-for="(item, index) in sceneLightShoppingGuideModule" :key="index">
      <a :href="item.styleItem.targetUrl" v-if="item.styleItem">
        <div
          class="m-styleBanner"
          :style="`background-image: url(&quot;${item.styleItem.backgroundUrl};); background-size: 100% 100%;`"
        >
          <div class="title" style="color: rgb(51, 51, 51);">{{item.styleItem.title}}</div>
          <div class="desc" style="color: rgb(127, 127, 127);">{{item.styleItem.desc}}</div>
          <div class="picList" v-if="item.styleItem">
            <img
              v-for="(item, index) in item.styleItem.picUrlList"
              :key="index"
              :src="item"
              class="pic"
            />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SceneLightShoppingGuide",
  props: {
    sceneLightShoppingGuideModule: Array
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/font_size.styl';

.sceneLightShoppingGuide {
  overflow: hidden;
  padding: 10px 30px 30px 26px;
  background: #fff;
  margin-bottom: 20px;

  .wrap {
    .m-styleBanner {
      display: block;
      width: 343px;
      height: 264px;
      float: left;
      margin: 4px 0 0 4px;
      padding: 20px 0 0 20px;
      border-radius: 4px;
      background-color: #F5F5F5;

      .title {
        color: rgb(51, 51, 51);
        padding-left: 10px;
        font-size: 32px;
        font-family: PingFangSC-Medium;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .desc {
        padding-left: 10px;
        font-size: $font_2;
        color: rgb(127, 127, 127);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .picList {
        width: 100%;

        .pic {
          width: 150px;
          height: 150px;
          float: left;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
