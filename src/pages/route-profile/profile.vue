<template>
  <div class="profile">
    <base-page-header class="header">
      <img class="logo" src="./img/logo.png" alt />
    </base-page-header>
    <div class="ctnOfBeforeLogin" v-if="!token">
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
    <div class="ctnOfAfterLogin" v-if="token">
      <div class="bigLogo">
        <img class="logo" src="./img/logo.png" alt />
      </div>
      <div class="profileInfo" v-if="loginData">
        <div class="tit">
          尊敬的用户：
          <span class="username">{{loginData.name || loginData.phone}}</span>
        </div>
        <br />
        <div class="wel">欢迎使用涛涛购物商城!</div>
      </div>
      <button class="outBtn" @click="loginOut">退出登录</button>
      <div class="welTxt">欢迎使用涛涛商城</div>
    </div>
  </div>
</template>

<script>
import pageheader from "components/base-pageHeader/pageHeader.vue";
import { Toast } from "vant";
import { mapState, mapActions } from "vuex";
import { RESET_LOGIN_INFO } from "store/mutation_types";
export default {
  name: "RouteProfile",
  components: {
    "base-page-header": pageheader
  },
  computed: {
    ...mapState({
      token: state => state.login.token,
      loginData: state => state.login.loginData
    })
  },
  methods: {
    ...mapActions([RESET_LOGIN_INFO]),
    async loginOut() {
      await this[RESET_LOGIN_INFO]();
      Toast.success({
        message: "注销成功！",
        duration: 2000,
        onClose: () => {
          this.$router.replace("/profile");
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';
@import '../../common/stylus/color.styl';

.profile {
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .ctnOfBeforeLogin, .ctnOfAfterLogin {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
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

    .profileInfo {
      position: absolute;
      top: 35%;
      width: 88%;
      font-size: 32px;
      color: #fff;
      background-color: $color_1;
      border-radius: 10px;

      .tit {
        margin-left: 6%;

        .username {
          font-size: 36px;
          font-weight: bolder;
          text-decoration: underline;
        }
      }

      .wel {
        text-align: center;
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

  .outBtn {
    position: absolute;
    bottom: 150px;
    width: 88%;
    height: 80px;
    align-items: center;
    line-height: 80px;
    color: #fff;
    border-radius: 10px;
    background-color: $color_1;
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
