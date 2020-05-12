<template>
  <div class="home">
    <!-- 头部固定定位 -->
    <header id="headerWraper">
      <!-- 头部上半部分 -->
      <div class="top">
        <a class="logo" href="/"></a>
        <ele-search :totalNumbersOfProducts="totalNumbersOfProducts"></ele-search>
        <button class="loginBtn">登录</button>
      </div>
      <!-- 头部下半部分 -->
      <div class="bottom">
        <!-- 分类横向滚动条 -->
        <div class="cateScroll" v-show="!toggleActive">
          <header>
            <div class="scroll-container inner" ref="cateScroll">
              <!--  商品列表-->
              <div class="list">
                <div class="tab" :class="{active:currentIndex === -1 }" @click="handleC(-1)">
                  <a href="/">
                    <span class="txt">推荐</span>
                  </a>
                </div>
                <div
                  v-for="(item, index) in indexCateModule"
                  :key="index"
                  class="tab"
                  :class="{active:currentIndex === index}"
                  @click="handleC(index)"
                >
                  <a href="/">
                    <span class="txt">{{item.name}}</span>
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
        <!-- 分类展开区域显示标题 -->
        <div class="tabAlter" v-show="toggleActive">全部频道</div>
        <!-- 切换按钮包裹区域 -->
        <div class="toggleWrap">
          <!-- 过渡渐变方块 -->
          <div class="linear"></div>
          <!-- 切换方块 -->
          <van-button
            class="toggle"
            :class="{toggleActive}"
            text="显示遮罩层"
            @click="toggleActive = !toggleActive"
          >
            <div class="icon"></div>
          </van-button>
        </div>
        <!-- 展开列表 -->
        <div class="moreCate" v-show="toggleActive">
          <a href="/">
            <div class="cateTag" :class="{active:currentIndex === -1 }" @click="handleC(-1)">推荐</div>
          </a>
          <a href="/">
            <div
              v-for="(item, index) in indexCateModule"
              :key="index"
              class="cateTag"
              :class="{active:currentIndex === index }"
              @click="handleC(index)"
            >{{item.name}}</div>
          </a>
        </div>
      </div>
      <!-- 头部菜单打开遮罩层 -->
      <van-overlay
        class="mask"
        :show="toggleActive"
        @click="toggleActive = !toggleActive"
        z-index="-1"
      />
    </header>
    <!-- 主体内容区 -->
    <section id="wraper" ref="wraper">
      <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
        <div class="big-container">
          <!-- 商品轮播banner图 -->
          <div id="slideWrap">
            <ele-swiper :focusList="indexData.focusList"></ele-swiper>
          </div>
          <!-- 提示信息 -->
          <div id="servicePolicy">
            <ul class="grow">
              <li v-for="(item, index) in indexData.policyDescList" :key="index" class="item">
                <a href="javascript:;">
                  <i :class="`iconfont icon-${item.icon}`"></i>
                  <span>{{item.desc}}</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- 商品分类区域 -->
          <ele-categroies
            v-if="indexData.kingKongModule"
            :kingKongList="indexData.kingKongModule.kingKongList"
          ></ele-categroies>
          <!-- 广告区域 -->
          <div id="adWrap">
            <a class="adImg" href="https://act.you.163.com/act/pub/rb10rnjzwE30.html"></a>
          </div>
          <!-- 活动区域 -->
          <ele-activity :indexActivityModule="indexData.indexActivityModule"></ele-activity>
          <!-- 热销榜区 -->
          <ele-hotSell
            v-if="indexData.categoryHotSellModule"
            :categoryList="indexData.categoryHotSellModule.categoryList"
          ></ele-hotSell>
          <!-- 人气推荐 -->
          <ele-recommand
            v-if="indexData.newItemList"
            :newItemList="indexData.newItemList.slice(0,3)"
          ></ele-recommand>
          <!-- 限时购 -->
          <ele-flashSale :flashSaleModule="indexData.flashSaleModule"></ele-flashSale>
          <!-- 新品首发 -->
          <ele-newGoods v-if="indexData.newItemList" :newItemList="indexData.newItemList.slice(2)"></ele-newGoods>
          <!-- 场景灯购物指南 -->
          <ele-sceneLightShoppingGuide
            :sceneLightShoppingGuideModule="indexData.sceneLightShoppingGuideModule"
          ></ele-sceneLightShoppingGuide>
          <!-- 页面底部信息 -->
          <div id="ftWrap">
            <div class="m-ft g-row">
              <div class="bd">
                <a
                  href="/downloadapp?_stat_from=search_pz_baidu_29&amp;appAwakeUrl=http%3a%2f%2fm.you.163.com"
                  class="goApp w-button w-button-ghost w-button-s"
                >下载APP</a>
                <a
                  href="https://you.163.com?_m_forcepc_=true&amp;_m_anonid_=49be5c24-1086-490e-914b-dda257f64bb1"
                  class="goWeb w-button w-button-ghost w-button-s"
                >电脑版</a>
              </div>
              <p class="copyright">
                涛涛公司版权所有 © 1997-2020
                <br />食品经营许可证：XXXXXXXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </van-pull-refresh>
    </section>
    <!-- 回到顶部固定控件 -->
    <footer>
      <button
        id="backTop"
        v-show="backTopBtnisShowing"
        class="iconfont icon-icon_huaban"
        @click="backTopFn"
      ></button>
    </footer>
  </div>
</template>

<script>
import search from "components/ele-search/ele-search.vue";
import swiper from "components/ele-swiper/ele-swiper.vue";
import categroies from "components/ele-categroies/ele-categroies.vue";
import activity from "components/ele-activity/ele-activity.vue";
import hotSell from "components/ele-hotSell/ele-hotSell.vue";
import recommand from "components/ele-recommand/ele-recommand.vue";
import flashSale from "components/ele-flashSale/ele-flashSale.vue";
import newGoods from "components/ele-newGoods/ele-newGoods.vue";
import sceneLightShoppingGuide from "components/ele-sceneLightShoppingGuide/ele-sceneLightShoppingGuide.vue";

// 遮罩层组件
import Vue from "vue";
import { Overlay } from "vant";
Vue.use(Overlay);

import { Toast, PullRefresh, Button } from "vant";
import { mapActions, mapState } from "vuex";
import {
  GET_TOTAL_NUMBERS_OF_PRODUCTS,
  GET_INDEXDATA,
  GET_INDEXCATEMODULE
} from "store/mutation_types";

export default {
  name: "Home",
  data() {
    return {
      currentIndex: -1,
      toggleActive: false,
      isLoading: false,
      backTopBtnisShowing: false
    };
  },
  components: {
    [PullRefresh.name]: PullRefresh,
    [Button.name]: Button,
    "ele-search": search,
    "ele-swiper": swiper,
    "ele-categroies": categroies,
    "ele-activity": activity,
    "ele-hotSell": hotSell,
    "ele-recommand": recommand,
    "ele-flashSale": flashSale,
    "ele-newGoods": newGoods,
    "ele-sceneLightShoppingGuide": sceneLightShoppingGuide
  },
  computed: {
    ...mapState({
      totalNumbersOfProducts: state => state.home.totalNumbersOfProducts,
      indexData: state => state.home.indexData,
      indexCateModule: state => state.home.indexCateModule
    })
  },
  created() {
    this.initPageData();
  },
  mounted() {
    // this.observeScorll();
    this.initCateScroll();
    this.initWholeScroll();
  },
  methods: {
    ...mapActions([
      GET_TOTAL_NUMBERS_OF_PRODUCTS,
      GET_INDEXDATA,
      GET_INDEXCATEMODULE
    ]),
    async initPageData() {
      await this[GET_TOTAL_NUMBERS_OF_PRODUCTS]();
      await this[GET_INDEXDATA]();
      await this[GET_INDEXCATEMODULE]();
    },
    initCateScroll() {
      this.$nextTick(() => {
        this.$refs.cateScroll &&
          new this.BScroll(this.$refs.cateScroll, {
            click: true,
            scrollX: true
          });
      });
    },
    initWholeScroll() {
      this.$nextTick(() => {
        if (this.$refs.wraper) {
          this.wraperBS = new this.BScroll(this.$refs.wraper, {
            click: true,
            bounce: false,
            probeType: 3,
            scrollbar: {
              fade: true,
              interactive: true // 1.8.0 新增
            }
          });
          this.wraperBS.on("scroll", this.onScroll);
        }
      });
    },
    handleC(index) {
      this.currentIndex = index;
    },
    onRefresh() {
      this.initPageData();
      Toast("刷新成功");
      this.isLoading = false;
    },
    // 绑定scorll监听事件
    observeScorll() {
      // console.log(this.wraperScroll.y);
      // this.$refs.wraper.addEventListener("scroll", this.handleScroll);
    },
    // handleScroll() {
    //   // 滚动操作监听
    //   this.backTopBtnisShowing = this.wraperScroll.y > 1500;
    // },
    backTopFn() {
      // 使用requestAnimationFrame添加动画效果
      // let gotoTop = () => {
      //   this.$refs.wraper.scrollTop -= 150;
      //   if (this.$refs.wraper.scrollTop > 0) {
      //     window.requestAnimationFrame(gotoTop);
      //   }
      // };
      // window.requestAnimationFrame(gotoTop);
      this.wraperBS.scrollTo(0, 0, 200);
    },
    onScroll({ y }) {
      let dis = Math.abs(y);
      if (dis > 1500) this.backTopBtnisShowing = true;
      if (dis < 1500) this.backTopBtnisShowing = false;
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';
@import '../../common/stylus/color.styl';
@import '../../common/stylus/font_size.styl';

.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;

  // 头部绝对定位
  #headerWraper {
    width: 100%;
    // position: absolute !important;
    // left: 0;
    // top: 0;
    // width: 100%;
    height: 147px; /* px */
    z-index: 10;
    background-color: #fff;
    border-bottom: 1px solid #ccc; /* 1px */

    .top {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      background: #fff;
      padding: 0.21333rem 0.4rem;

      .logo {
        display: inline-block;
        width: 138px;
        height: 65px;
        margin-right: 20px;
        bg-image(logo, png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }

      .loginBtn {
        width: 72px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        color: $color_1;
        border: 1px solid $color_1;
        border-radius: 8px;
        margin-left: 16px;
        font-size: $font_2;
        white-space: nowrap;
      }
    }

    .bottom {
      position: relative;
      background-color: #fff;
      margin-top: -1px;

      .cateScroll {
        padding-right: 100px;
        width: 100%;

        >header {
          background-color: #fff;

          .inner {
            display: flex;
            height: 100%;
            width: 100%;

            .list {
              display: flex;
              flex-flow: row nowrap;
              padding: 0 30px;
              background-color: #fff;

              .tab {
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
                margin-left: 20px;

                .txt {
                  white-space: nowrap;
                  padding: 0 16px;
                  line-height: 60px;
                  font-size: $font_1;
                  color: #333;
                  text-align: center;
                }

                &:first-child {
                  margin-left: 0;
                }

                &.active {
                  color: $color_1;
                  border-px(@color, 4px);

                  .txt {
                    color: $color_1;
                  }
                }
              }
            }
          }
        }
      }

      .toggleWrap {
        position: absolute;
        top: 0;
        right: 0;
        inlineCenter();

        .linear {
          width: 60px;
          height: 60px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%);
        }

        .toggle {
          width: 100px;
          height: 60px;
          text-align: center;
          background-color: #fff;
          border-width: 0;

          &.before {
            display: none;
          }

          &.toggleActive {
            .icon {
              transform: rotate(180deg);
            }
          }

          .icon {
            bg-image(arrow, webp);
            margin-top: 15px;
            display: inline-block;
            vertical-align: middle;
            background-repeat: no-repeat;
            width: 30px;
            height: 30px;
            transition: transform 0.5s;
          }
        }
      }

      .tabAlter {
        height: 60px;
        line-height: 60px;
        padding-left: 0.4rem;
        font-size: $font_1;
      }

      .moreCate {
        padding-top: 24px;
        overflow: hidden;
        font-size: $font_2;

        .cateTag {
          width: 148px;
          height: 54px;
          line-height: 54px;
          text-align: center;
          float: left;
          margin-bottom: 40px;
          margin-left: 30px;
          background: #fafafa;
          border: 1px solid #ccc; /* px */
          border-radius: 40px;

          &.active {
            border: 1px solid $color_1;
            color: $color_1;
          }
        }
      }
    }
  }

  // 主体内容区
  #wraper {
    width: 100%;
    overflow: hidden;

    .big-container {
      -webkit-overflow-scrolling: touch;
      padding-bottom: 99px;
      padding-top: 10px;

      .container {
        background-color: #fff;
        margin-bottom: 20px;
        padding-bottom: 30px;
      }

      #slideWrap {
        position: relative;
        z-index: 1;
        height: 296px;
      }

      // 服务政策小模块
      #servicePolicy {
        background-color: #fff;

        .grow {
          width: 100%;
          height: 72px;
          padding: 0 30px;
          box-sizing: border-box;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          zoom: 1;

          .item {
            flex: 1;
            float: left;

            a {
              display: inline-block;
              vertical-align: middle;
              height: 32px;

              .iconfont {
                display: inline-block;
                font-size: 30px;
                color: $color_1;
              }
            }
          }
        }
      }

      // 广告大图
      #adWrap {
        width: 100%;
        height: 240px;

        .adImg {
          display: block;
          width: 100%;
          height: 100%;
          bg-image(ad-bg, gif);
        }
      }

      // 底部固定导航区
      #ftWrap {
        border-top: 1px solid rgba(0, 0, 0, 0.15);
        background-color: #414141;

        .m-ft {
          text-align: center;
          padding: 54px 20px 28px 20px;
          width: 710px;
          margin: 0 auto;

          .bd {
            margin-bottom: 36px;

            .goApp, .goWeb {
              display: inline-block;
              width: 170px;
              height: 60px;
              line-height: 60px;
              margin-right: 50px;
              text-align: center;
              font-size: $font_2;
              color: #fff;
              border: 1px solid #999; /* px */
              vertical-align: middle;
              border-radius: 4px; /* px */
              background-color: transparent;
            }

            .goWeb {
              margin-right: 0;
            }
          }

          .copyright {
            font-size: $font_2;
            line-height: 32px;
            color: #999;
          }
        }
      }
    }
  }

  // 回到顶部固定定位控件
  #backTop {
    position: fixed;
    right: 30px;
    bottom: 150px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.8);
    font-size: 45px;
    text-align: center;
  }
}
</style>
