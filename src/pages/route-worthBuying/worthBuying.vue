<template>
  <div class="worthBuying">
    <base-page-header>值得买</base-page-header>
    <section id="wraper" ref="wraper">
      <vue-waterfall-easy
        :imgsArr="canUseWaterfullList"
        @scrollReachBottom="getData"
        srcKey="picUrl"
        hrefKey="schemeUrl"
        :mobileGap="mobileGap"
        cardAnimationClass
        :loadingTimeOut="500"
        :loadingDotCount="0"
        :imgWidth="400"
      >
        <div slot="waterfall-head" class="waterfullHeader">
          <div class="swiperTab-container">
            <div class="title">
              <img
                class="TxtImg"
                src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png"
                alt
              />
              <div class="text">严选好物&nbsp;用心生活</div>
              <img
                class="bgImg"
                src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png"
                alt
              />
            </div>
            <van-swipe class="my-swipe" :width="width" :loop="false" :stop-propagation="false">
              <van-swipe-item class="swipeitem" v-for="(item, index) in canUseNavList" :key="index">
                <div class="group">
                  <div v-if="item[0] && item[0].columnUrl">
                    <a :href="item[0].columnUrl" class="item">
                      <div class="topContainer">
                        <img class="topPic" v-lazy="item[0].picUrl" alt />
                      </div>
                      <div class="detail">
                        <div class="mainText">{{item[0].mainTitle}}</div>
                        <div class="descText">{{item[0].viceTitle}}</div>
                      </div>
                    </a>
                  </div>
                  <div v-if="item[1] && item[1].columnUrl">
                    <a :href="item[1].columnUrl" class="item">
                      <div class="topContainer">
                        <img class="topPic" v-lazy="item[1].picUrl" alt />
                      </div>
                      <div class="detail">
                        <div class="mainText">{{item[1].mainTitle}}</div>
                        <div class="descText">{{item[1].viceTitle}}</div>
                      </div>
                    </a>
                  </div>
                </div>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <div class="img-info" slot-scope="props" ref="imgInfo">
          <div class="title some-info">{{canUseWaterfullList[props.index].title}}</div>
          <div class="placeHolder"></div>
          <div class="lookDetail">
            <div class="userInfo">
              <img class="userPic" v-lazy="canUseWaterfullList[props.index].avatar" alt />
              <div class="userName">{{canUseWaterfullList[props.index].nickname}}</div>
            </div>
            <div class="upArea">
              <img
                src="data:image/png;base64,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"
                alt
              />
              <div class="upText">{{Math.floor(canUseWaterfullList[props.index].readCount/1000)}}K</div>
            </div>
          </div>
          <p class="some-info">{{props.value.info}}</p>
        </div>
      </vue-waterfall-easy>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import vueWaterfallEasy from "vue-waterfall-easy";
Vue.use(Swipe);
Vue.use(SwipeItem);
import { mapActions, mapState } from "vuex";
import { GET_NAVLIST, GET_INITWATERFULLDATA } from "store/mutation_types";
import pageheader from "components/base-pageHeader/pageHeader.vue";
export default {
  name: "RouteWorthBuying",
  data() {
    return {
      // 需要用于展示导航的数据
      canUseNavList: [],
      canUseWaterfullList: [],
      page: 1,
      imgsArr: []
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    vueWaterfallEasy,
    "base-page-header": pageheader
  },
  computed: {
    ...mapState({
      navList: state => state.worth.navList,
      initWaterfullList: state => state.worth.initWaterfullList
    }),
    width() {
      if (window.devicePixelRatio >= 3) {
        return 90;
      }
      return 90 * window.devicePixelRatio;
    },
    mobileGap() {
      if (window.devicePixelRatio >= 3) {
        return 8;
      }
      return 16 * window.devicePixelRatio;
    }
  },
  created() {},
  beforeMount() {
    this.initData();
    this.getData();
  },
  mounted() {
    // this.initWholeScorll();
    // let node = document.getElementsByClassName("vue-waterfall-easy-scroll")[0];
    // this.$nextTick(() => {
    //   node &&
    //     new this.BScroll(node, {
    //       click: true
    //     });
    // });
    // console.log(node);
  },
  methods: {
    ...mapActions([GET_NAVLIST, GET_INITWATERFULLDATA]),
    async initData() {
      await this[GET_NAVLIST]();
      await this[GET_INITWATERFULLDATA]();
      this.processNavList();
      this.processInitData(this.initWaterfullList);
    },
    async getData() {
      let res = await this.$http.worth.getUpdateWaterfulData({
        page: this.page,
        size: 5
      });
      if (res.code === "200" && res.data.hasMore) {
        let tempArr1 = [];
        let midArr = res.data.result;
        let len = res.data.result.length;
        for (let i = 0; i < len; i++) {
          tempArr1.push(midArr[i]);
        }
        this.processInitData(tempArr1);
        this.page++;
      }
      // this.imgsArr = this.imgsArr.concat(res.data);
      // this.group++;
    },
    // 根据返回数据数组进行二次处理,便于页面进行遍历渲染
    processNavList() {
      if (!this.navList) return;
      let len = this.navList.length;
      let n = 2;
      let colNum = len % n === 0 ? len / n : Math.floor(len / n + 1);
      let res = [];
      for (let i = 0; i < colNum; i++) {
        let temp = this.navList.slice(i * n, i * n + n);
        res.push(JSON.parse(JSON.stringify(temp)));
      }
      this.canUseNavList = res;
    },

    // 根据返回数据数组进行二次处理,便于页面进行遍历渲染
    processInitData(ArrData) {
      let res = this.canUseWaterfullList;
      ArrData.forEach(item => {
        return res.push(item.topics[0]);
      });
    }
    // initWholeScorll() {
    //   this.$nextTick(() => {
    //     this.$refs.wraper &&
    //       new this.BScroll(this.$refs.wraper, {
    //         click: true
    //       });
    //   });
    // }
  },
  beforeRouteUpdate(to, from, next) {
    this.initData();
    next();
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';

.worthBuying {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  background-color: #fff;
  overflow: hidden;

  #wraper {
    width: 100%;
    flex: 1;
    background: #eee;

    /deep/.vue-waterfall-easy-container {
      center();

      .vue-waterfall-easy-scroll {
        display: flex;
        justify-content: center;

        .waterfullHeader {
          position: absolute;
          width: 100%;

          .swiperTab-container {
            position: relative;
            padding-top: 145px;
            background-color: #eee;
            overflow: hidden;
            margin-bottom: 20px;

            .title {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;

              .TxtImg {
                position: absolute;
                left: 9px;
                top: 55px;
                display: block;
                width: 130px;
                height: 70px;
              }

              .text {
                position: absolute;
                left: 145px;
                top: 82px;
                font-size: 30px;
                line-height: 30px;
                font-family: 'PingFangSC-Regular';
                color: #fff;
              }

              .bgImg {
                width: 100%;
                height: 100%;
              }
            }

            .my-swipe {
              width: 710px;
              height: 500px;
              margin: 0 auto;
              border-radius: 20px;
              background-color: #fff;

              .swipeitem {
                width: 180px;

                .group {
                  width: 180px;
                  padding: 4px;
                  background: #FFF;
                  padding-top: 36px;

                  .item {
                    display: inline-block;
                    position: relative;
                    width: 168px;
                    height: 200px;
                    word-wrap: break-word;
                    word-break: normal;

                    .topContainer {
                      position: relative;
                      width: 120px;
                      height: 120px;
                      margin: 0 auto;

                      .topPic {
                        width: 120px;
                        height: 120px;
                      }
                    }

                    .detail {
                      width: 245px;
                      margin-top: 12px;

                      .mainText {
                        font-family: 'PingFang-SC-Bold';
                        font-weight: bold;
                        font-size: 30px;
                        width: 168px;
                        height: 40px;
                        white-space: nowrap;
                        overflow: hidden;
                        color: #333333;
                        text-align: center;
                        line-height: 40px;
                      }

                      .descText {
                        width: 168px;
                        margin-top: 3px;
                        font-family: 'PingFangSC-Regular';
                        font-size: 23px;
                        color: #999999;
                        text-align: center;
                        height: 30px;
                        line-height: 30px;
                        white-space: nowrap;
                        overflow: hidden;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .vue-waterfall-easy {
          left: 0;
          top: 665px;

          .img-box {
            width: 50%;

            .img-inner-box {
              width: 100%;
              height: 100%;
              border-radius: 0 0 10px 10px;
              overflow: hidden;
              box-shadow: none;

              .img-wraper {
                height: 350px;
                width: 100%;

                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }

            .img-wraper>img {
              border-radius: 25px 25px 0 0;
            }

            .img-info {
              .title {
                width: 100%;
                padding: 18px 16px 0;
                color: #333;
                line-height: 28px;
                font-size: 28px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                background-color: #fff;
                text-align: left;
              }

              .placeHolder {
                width: 100%;
                height: 17px;
                background-color: #fff;
              }

              .lookDetail {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;
                font-size: 26px;
                padding: 17px 16px 12px;
                background-color: #fff;

                .userInfo {
                  display: flex;

                  .userPic {
                    display: block;
                    width: 46px;
                    height: 46px;
                    border-radius: 44px;
                    border: 1px solid #d9d9d9; /* px */
                  }

                  .userName {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 24px;
                    color: #7f7f7f;
                    height: 48px;
                    line-height: 48px;
                    margin-left: 8px;
                  }
                }

                .upArea {
                  display: flex;
                  width: 75px;
                  justify-content: flex-end;
                  align-items: center;

                  img {
                    width: 36px;
                    height: 36px;
                  }

                  .upText {
                    font-size: 24px;
                    color: #7f7f7f;
                    max-width: 67.5px;
                    text-align: right;
                    height: 24px;
                    line-height: 24px;
                    margin-right: 2px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
