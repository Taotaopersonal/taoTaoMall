<template>
  <div class="home">
    <!-- 头部 -->
    <div id="headerWraper">
      <div class="headerContent">
        <!-- 头部上半部分 -->
        <div class="top">
          <a class="logo" href="/"></a>
          <ele-search width="442px"></ele-search>
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
                  <div class="tab" :class="{active:currentIndex===index}" @click="handleC">
                    <span class="txt">推荐</span>
                  </div>
                  <div class="tab">
                    <span class="txt">推荐</span>
                  </div>
                  <div class="tab">
                    <span class="txt">推荐</span>
                  </div>
                  <div class="tab">
                    <span class="txt">推荐</span>
                  </div>
                  <div class="tab">
                    <span class="txt">推荐</span>
                  </div>
                  <div class="tab">
                    <span class="txt">推荐</span>
                  </div>
                  <div class="tab">
                    <span class="txt">推荐</span>
                  </div>
                  <div class="tab">
                    <span class="txt">推荐</span>
                  </div>
                  <div class="tab">
                    <span class="txt">推dsadsa荐</span>
                  </div>
                  <div class="tab">
                    <span class="txt">dsads推荐</span>
                  </div>
                  <div class="tab">
                    <span class="txt">推荐</span>
                  </div>
                  <div class="tab">
                    <span class="txt">推荐</span>
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
            <div class="toggle" :class="{toggleActive}" @click="toggleActive = !toggleActive">
              <div class="icon"></div>
            </div>
          </div>
          <!-- 展开列表 -->
          <div class="moreCate" v-show="toggleActive">
            <div class="cateTag cateTag-active">服装饰品</div>
            <div class="cateTag">服装饰品</div>
            <div class="cateTag">服装饰品</div>
            <div class="cateTag">服装饰品</div>
            <div class="cateTag">服装饰品</div>
            <div class="cateTag">服装饰品</div>
            <div class="cateTag">服装饰品</div>
          </div>
        </div>
        <!-- 头部菜单打开遮罩层 -->
        <div class="mask" v-show="toggleActive"></div>
      </div>
    </div>
    <div id="wraper"  ref="wraper">
      <div class="container">
        <!-- 商品轮播banner图 -->
        <div id="slideWrap">
          <ele-swiper></ele-swiper>
        </div>
        <!-- 提示信息 -->
        <div id="servicePolicy">
          <ul class="grow">
            <li class="item">
              <a href="javascript:;">
                <i class="iconfont icon-tao"></i>
                <span>涛涛自营品牌</span>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <i class="iconfont icon-baozheng"></i>
                <span>30天无忧退货</span>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <i class="iconfont icon-tuikuan"></i>
                <span>48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 商品分类区域 -->
        <ele-categroies></ele-categroies>
        <!-- 广告区域 -->
        <div id="adWrap">
          <a class="adImg" href="javascript:;"></a>
        </div>
        <!-- 活动区域 -->
        <ele-activity></ele-activity>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/ele-search/ele-search.vue";
import swiper from "@/components/ele-swiper/ele-swiper.vue";
import categroies from "@/components/ele-categroies/ele-categroies.vue";
import activity from "@/components/ele-activity/ele-activity.vue";
export default {
  name: "Home",
  data() {
    return {
      currentIndex: 0,
      index: 0,
      toggleActive: false
    };
  },
  components: {
    "ele-search": search,
    "ele-swiper": swiper,
    "ele-categroies": categroies,
    "ele-activity": activity
  },
  mounted() {
    this.renderHomeBScorll();
    this.initCateScroll();
  },
  methods: {
    renderHomeBScorll() {
      this.$nextTick(() => {
        new this.BScroll(this.$refs.wraper, {
          bounce: false,
          click: true
        });
      });
    },
    initCateScroll() {
      this.$nextTick(() => {
        new this.BScroll(this.$refs.cateScroll, {
          click: true,
          scrollX: true
        });
      });
    },
    handleC() {}
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
  overflow: hidden;

  #headerWraper {
    width: 100%;
    height: 148px; /* px */

    .headerContent {
      position: fixed !important;
      left: 0;
      top: 0;
      width: 100%;
      height: 148px; /* px */
      z-index: 10;
      background-color: #fff;
      border-bottom: 1px solid #d9d9d9;

      .top {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        background: #fff;
        padding: 0.21333rem 0.4rem;

        .logo {
          display: inline-block;
          width: 138px;
          height: 48px;
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

            &.toggleActive {
              .icon {
                transform: rotate(180deg);
              }
            }

            .icon {
              bg-image(arrow, webp);
              background-size: 100% 100%;
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

            &.cateTag-active {
              border: 1px solid $color_1;
              color: $color_1;
            }
          }
        }
      }
    }
  }

  #wraper {
    width: 100%;
    height 100%

    // 轮播Banner图
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
        background-size: 100% 100%;
      }
    }
  }
}
</style>
