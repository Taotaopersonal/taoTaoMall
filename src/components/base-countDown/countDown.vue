<template>
  <van-count-down :time="remainTime" class="countDown" @change="hanldeChange">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
  </van-count-down>
</template>

<script>
import { CountDown } from "vant";

export default {
  name: "CountDown",
  props: {
    remainTime: Number
  },
  data() {
    return {
      timeData: {
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    };
  },
  components: {
    [CountDown.name]: CountDown
  },
  methods: {
    hanldeChange(timeData) {
      this.timeData = timeData;
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/color.styl';

.countDown {
  display: inline-block;

  .colon {
    display: inline-block;
    color: $color_1;
    font-size: 28px;
  }

  .block {
    display: inline-block;
    border-radius: 4px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    margin: 0 10px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    background-color: $color_1;
    font-family: PingFangSC-Medium;
  }
}
</style>
