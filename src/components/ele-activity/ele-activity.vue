<template>
  <div class="activityWrap">
    <div class="title">
      <span class="txt">新人专享</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="name">新人专享礼包</div>
        <div class="imgWrap">
          <div class="img">
            <img src="holder.js/258x257" alt />
          </div>
          <div class="animate"></div>
        </div>
      </div>
      <div class="right">
        <div class="module1">
          <div class="activityItem">
            <div class="picWrap">
              <div class="pic">
                <img src="hoder.js/200x200" alt />
              </div>
              <div class="discount">
                <div class="line1">¥79</div>
                <div class="line2">¥89</div>
              </div>
            </div>
            <div class="cnt">
              <div class="title">福利社</div>
              <div class="subTitle">今日特价</div>
            </div>
          </div>
        </div>
        <div class="module2">
          <div class="activityItem">
            <div class="picWrap">
              <div class="pic">
                <img src="holder.js/200x200" />
              </div>
              <div class="discount">
                <div class="line1">¥4.9</div>
                <div class="line2">¥9.9</div>
              </div>
            </div>
            <div class="cnt">
              <div class="title">新人拼团</div>
              <div class="subTitle"></div>
              <div class="tag">1元起包邮</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "activity"
};
</script>

<style scoped lang="stylus">
  .activityWrap
    margin 20px 0
    padding-bottom 30px
    background-color #fff
    .title
      height: 90px;
      width: 100%;
      box-sizing border-box
      padding 0 30px
      background-color #fff
      line-height: 90px;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 32px;
      overflow hidden
      .txt
        display inline-block
        position relative
        &:before
          content: '';
          position: absolute;
          top: 45px;
          left -40px;
          width: 24px;
          height: 3px;
          background: #333;
        &:after
          content: '';
          position: absolute;
          top: 45px;
          right -40px
          width: 24px;
          height: 3px;
          background: #333;
    .content
      padding-left 30px
      overflow hidden
      .left
        display block
        width 343px
        height 343px
        background-color #f9e9cf
        border-radius 4px
        margin-right 4px
        float left
        color #333
        .name
          font-family PingFangSC-Medium
          font-size 32px
          padding 30px 0 0 30px
        .imgwrap
          margin 43px auto
          width 258px
          height 258px
          position relative
          .img
            width 258px
            height 258px
            img
              display block
              width 100%
              height 100%

      .right  
        float left 
        .module1
          background-color #fbe2d3
          border-radius 4px /* px */
          width 343px
          height 215px
          margin-bottom 4px
          .activityItem
            position relative
            display block
            color #333
            width 313px
            height 195px
            float left
            border-radius 4px
            margin 0 4px 4px 0
            font-size 24px
            padding 20px 0 0 30
            .picWrap
              position absolute
              top 15px
              right 0
              width 200px
              height 200px
              .pic
                width 200px
                height 200px
                img
                  display block
                  width 100%
                  height 100%
              .discount
                position absolute
                top 0
                right 30px
                width 80px
                height 70px
                opacity .8
                background-color #f59524
                border-radius 50%
                padding-top 10px
                color #fff
                text-align center
                .line1
                  24px
                .line2
                  font-size 20px
                  margin-top 7px
                  text-decoration line-through
            .cnt
              position relative
              .title
                font-family PingFangSC-Medium
                font-size 32px
              .subTitle
                color #7F7F7f

        .module2
          background-color #fbe2d3
          border-radius 4px /* px */
          width 343px
          height 215px


</style>
