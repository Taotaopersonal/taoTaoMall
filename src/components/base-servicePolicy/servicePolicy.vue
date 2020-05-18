<template >
  <div id="servicePolicy">
    <ul class="grow">
      <li v-for="(item, index) in policyDescList" :key="index" class="item">
        <a href="javascript:;">
          <i :style="`fontSize:${fontSize}px;color:${color}`" :class="`iconfont icon-${item.icon}`"></i>
          <span>{{item.desc}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "servicePolicy",
  props: {
    policyDescList: Array,
    fontSize: Number,
    color: String
  }
};
</script>

<style scope lang="stylus">
@import '../../common/stylus/color.styl';

// 服务政策小模块
#servicePolicy {
  .grow {
    width: 100%;
    height: 72px;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    zoom: 1;

    .item {
      float: left;

      a {
        display: inline-block;
        vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content: center;

        .iconfont {
          display: inline-block;
          font-size: 30px;
          color: $color_1;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
