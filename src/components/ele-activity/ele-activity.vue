<template>
  <div class="container activityContainer">
    <module-title class="activityTitle">
      <span class="txt">新人专享</span>
    </module-title>
    <div class="content">
      <div class="left">
        <div class="name">新人专享礼包</div>
        <div class="imgWrap">
          <div class="img">
            <img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt />
          </div>
          <div class="animate"></div>
        </div>
      </div>
      <div class="right" v-if="indexActivityModule">
        <a :href="indexActivityModule[0].targetUrl">
          <div class="module1">
            <div class="activityItem">
              <div class="picWrap">
                <div class="pic">
                  <img :src="indexActivityModule[0].picUrl" alt />
                </div>
                <div class="discount">
                  <div class="line1">{{indexActivityModule[0].activityPrice}}</div>
                  <div class="line2">{{indexActivityModule[0].originPrice}}</div>
                </div>
              </div>
              <div class="cnt">
                <div class="title">{{indexActivityModule[0].title}}</div>
                <div class="subTitle">{{indexActivityModule[0].subTitle}}</div>
              </div>
            </div>
          </div>
        </a>
        <a :href="indexActivityModule[1].targetUrl">
          <div class="module2">
            <div class="activityItem">
              <div class="picWrap">
                <div class="pic">
                  <img
                    :src="indexActivityModule[1].picUrl"
                  />
                </div>
                <div class="discount">
                  <div class="line1">{{indexActivityModule[1].activityPrice}}</div>
                  <div class="line2">{{indexActivityModule[1].originPrice}}</div>
                </div>
              </div>
              <div class="cnt">
                <div class="title">{{indexActivityModule[1].title}}</div>
                <div class="subTitle"></div>
                <div class="tag">{{indexActivityModule[1].tag}}}}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import moduleTitle from "components/base-module-title/module-title.vue";
export default {
  name: "activity",
  props: {
    indexActivityModule: Array
  },
  components: {
    moduleTitle: moduleTitle
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';

.activityContainer {
  .activityTitle {
    height: 90px;
    line-height: 90px;
    text-align: center;
    font-family: PingFangSC-Regular;

    .txt {
      display: inline-block;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        top: 45px;
        left: -40px;
        width: 24px;
        height: 3px;
        background: #333;
      }

      &:after {
        content: '';
        position: absolute;
        top: 45px;
        right: -40px;
        width: 24px;
        height: 3px;
        background: #333;
      }
    }
  }

  .content {
    padding-left: 30px;
    overflow: hidden;

    .left {
      display: block;
      width: 343px;
      height: 434px;
      background-color: #f9e9cf;
      border-radius: 4px;
      margin-right: 4px;
      float: left;
      color: #333;

      .name {
        font-family: PingFangSC-Medium;
        font-size: 32px;
        padding: 30px 0 0 30px;
      }

      .imgWrap {
        margin: 43px auto;
        width: 258px;
        height: 258px;
        position: relative;

        .img {
          width: 258px;
          height: 258px;

          img {
            display: inline;
            width: 100%;
            height: 100%;
          }
        }

        .animate {
          position: absolute;
          width: 30px;
          height: 20px;
          bottom: 18px;
          right: 65px;
          animation: carousel 1s linner infinite;
          bg-image(right_arrow, webp);
        }
      }
    }

    .right {
      float: left;

      .module1, .module2 {
        background-color: #fbe2d3;
        border-radius: 4px; /* px */
        width: 343px;
        height: 215px;
        margin-bottom: 4px;

        .activityItem {
          position: relative;
          display: block;
          color: #333;
          width: 342px;
          height: 215px;
          float: left;
          border-radius: 4px;
          margin: 0 4px 4px 0;
          font-size: 24px;
          padding: 20px 0 0 30px;

          .picWrap {
            position: absolute;
            top: 15px;
            right: 0;
            width: 200px;
            height: 200px;

            .pic {
              width: 200px;
              height: 200px;

              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }

            .discount {
              position: absolute;
              top: 0;
              right: 30px;
              width: 80px;
              height: 80px;
              opacity: 0.8;
              background-color: #f59524;
              border-radius: 50%;
              padding-top: 10px;
              color: #fff;
              text-align: center;

              .line1 {
                24px;
              }

              .line2 {
                font-size: 20px;
                margin-top: 7px;
                text-decoration: line-through;
              }
            }
          }

          .cnt {
            position: relative;

            .title {
              font-family: PingFangSC-Medium;
              font-size: 32px;
            }

            .subTitle {
              color: #7F7F7f;
            }
          }
        }
      }

      .module2 {
        .tag {
          position: relative;
          display: inline-block;
          padding: 0 10px;
          height: 32px;
          background: #CBB693;
          border-radius: 40px;
          color: #fff;
          font-size: 22px;
          line-height: 32px;
          text-align: center;
        }
      }
    }
  }
}
</style>
