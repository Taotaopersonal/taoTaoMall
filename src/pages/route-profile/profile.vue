<template>
  <div class="profile">
    <base-page-header class="header">
      <img class="logo" src="./img/logo.png" alt />
    </base-page-header>
    <div class="ctn">
      <div class="bigLogo">
        <img class="logo" src="./img/logo.png" alt />
      </div>
      <div class="loginComp">
        <button class="phone" @click="$router.replace('/loginByPhone')">
          <i class="iconfont icon-shoujidenglu">&nbsp;手机号验证登录</i>
        </button>
        <button class="pwd" @click="$router.replace('/loginByPwd')">
          <i class="iconfont icon-mima">&nbsp;密码账号登录</i>
        </button>
      </div>
      <div class="welTxt">欢迎使用涛涛商城</div>
    </div>
  </div>
</template>

<script>
import pageheader from "components/base-pageHeader/pageHeader.vue";

export default {
  name: "RouteProfile",
  components: {
    "base-page-header": pageheader
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';
@import '../../common/stylus/color.styl';

.profile {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .ctn {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: #f2f5f4;

    .bigLogo {
      position: absolute;
      left: 0;
      right: 0px;
      top: 260px;
      margin: auto;
      width: 181px;
      height: 90px;

      .logo {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .loginComp {
      margin-top: 480px;
      width: 88%;
      display: flex;
      flex-flow: column nowrap;

      .phone, .pwd {
        width: 100%;
        height: 95px;
        background-color: $color_1;

        .iconfont {
          font-size: 28px;
          color: #fff;
        }
      }

      .pwd {
        border: 1px solid $color_1;
        background-color: transparent;

        .iconfont {
          color: $color_1;
        }
      }

      .phone {
        margin-bottom: 50px;
      }
    }
  }

  .welTxt {
    position: absolute;
    bottom: 80px;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: $color_1;

    &:before, &:after {
      content: '';
      display: block;
      width: 35px;
      height: 5px;
      background-color: $color_1;
      margin-right: 10px;
    }

    &:after {
      margin-left: 10px;
    }
  }
}
</style>
