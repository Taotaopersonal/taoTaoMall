<template>
  <div class="loginByPwd">
    <base-page-header class="header">
      <img class="logo" src="./img/logo.png" alt />
    </base-page-header>
    <div class="ctn">
      <div class="bigLogo">
        <img class="logo" src="./img/logo.png" alt />
      </div>

      <div class="form_of_loginByPwd">
        <ValidationObserver
          v-slot="{ invalid }"
          class="login_content"
          data-vv-validate-on="change|blur"
        >
          <form @submit.prevent="onSubmit" class="login_message">
            <div class="nameIptContainer">
              <ValidationProvider
                name="name"
                :rules="{required:true}"
                v-slot="{ errors }"
                class="valArea"
              >
                <div class="nameIpt">
                  <input v-model="name" maxlength="16" type="tel" placeholder="请输入账号" />
                  <i v-show="hasImport" class="iconfont icon-deletorerror" @click="clearIpt"></i>
                </div>
                <span class="tipInfo" style="color:rgba(255,0,0,.8)">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="pwdIptContainer">
              <ValidationProvider
                name="pwd"
                :rules="{required:true}"
                v-slot="{ errors }"
                class="valArea"
              >
                <div class="pwdIpt">
                  <input
                    v-model="pwd"
                    :type="isShow?`text`:`password`"
                    maxlength="8"
                    placeholder="请输入密码"
                  />
                  <div
                    class="switch_button"
                    :class="isShow ? 'on' : 'off'"
                    @click="isShow = ! isShow"
                  >
                    <div class="switch_circle" :class="{right:isShow}"></div>
                    <span class="switch_text">{{isShow?`隐藏`:`显示`}}</span>
                  </div>
                </div>

                <span class="tipInfo" style="color:rgba(255,0,0,.8)">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="imgCodeIptContainer">
              <ValidationProvider
                name="imgCode"
                :rules="{required:true}"
                v-slot="{ errors }"
                class="valArea"
              >
                <div class="imgCodeIpt">
                  <input v-model="captcha" maxlength="4" type="text" placeholder="请输入验证码" />
                  <img
                    class="get_verification"
                    :src="staticImgBaseUrl + '/captcha'"
                    alt="captcha"
                    @click="tapChangeImg"
                    ref="captcha"
                  />
                </div>
                <span class="tipInfo" style="color:rgba(255,0,0,.8)">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <button class="loginBtn" :disabled="invalid">登录</button>
          </form>
        </ValidationObserver>

        <div class="changeLoginStyle" @click="$router.replace('/loginByPhone')">使用手机号登录&nbsp;&gt;</div>
      </div>
    </div>
  </div>
</template>

<script>
import pageheader from "components/base-pageHeader/pageHeader.vue";
import { mapActions, mapState } from "vuex";
import { GET_LOGIN_INFO } from "store/mutation_types";
export default {
  name: "loginByPwd",
  data: () => ({
    loginWay: "password", //登录方式
    isShow: false,

    // 表单数据
    name: "",
    pwd: "",
    captcha: ""
  }),
  components: {
    "base-page-header": pageheader
  },
  computed: {
    ...mapState({
      staticImgBaseUrl: state => state.login.staticImgBaseUrl
    }),
    hasImport() {
      return this.name ? true : false;
    }
  },
  methods: {
    ...mapActions([GET_LOGIN_INFO]),
    onSubmit() {
      console.log(123456);
      this.login();
    },
    async login() {
      await this[GET_LOGIN_INFO]({
        loginWay: this.loginWay,
        name: this.name,
        pwd: this.pwd,
        captcha: this.captcha,
        tapChangeImg: this.tapChangeImg
      });
    },
    // 电话表单清除按钮
    clearIpt() {
      this.name = "";
    },
    tapChangeImg() {
      console.log(this.$refs.captcha.src);
      this.$refs.captcha.src = `${
        this.staticImgBaseUrl
      }/captcha?time=${Date.now()}`;
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';
@import '../../common/stylus/color.styl';
@import '../../common/stylus/font_size.styl';

.loginByPwd {
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .ctn {
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
      top: 80px;
      margin: auto;
      width: 181px;
      height: 90px;

      .logo {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .form_of_loginByPwd {
      position: absolute;
      left: 0;
      top: 300px;
      width: 100%;

      .login_content {
        display: block;
        width: 100%;

        .login_message {
          padding: 0 45px;
          overflow: hidden;

          .tipInfo {
            white-space: nowrap;
          }

          .loginBtn {
            display: block;
            width: 100%;
            line-height: 85px;
            margin-top: 20px;
            border-radius: 8px;
            background-color: $color_1;
            color: #fff;
            font-size: 28px;
          }

          .nameIptContainer, .pwdIptContainer, .imgCodeIptContainer {
            .valArea {
              display: block;
              width: 100%;
              height: 135px;

              .nameIpt, .pwdIpt, .imgCodeIpt {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-px(#999, 2px);

                .iconfont {
                  padding: 0 20px;
                  font-size: 30px;
                  color: rgba(0, 0, 0, 0.3);
                }

                .get_verification {
                  width: 230px;
                  height: 80px;
                  border-radius: 10px;
                  white-space: nowrap;
                }

                >input {
                  flex: 1;
                  height: 80px;
                  font-size: 28px;
                  background-color: transparent;
                }
              }

              .pwdIpt>.switch_button {
                font-size: 18px;
                border: 1px solid $color_1;
                border-radius: 8px;
                transition: background-color 0.3s, border-color 0.3s;
                padding: 0 6px;
                width: 60px;
                height: 28px;
                line-height: 28px;
                color: #fff;
                position: absolute;
                top: 50%;
                right: 10px;
                transform: translateY(-50%);
                text-align: center;

                &.off {
                  .switch_text {
                    float: right;
                    color: #000;
                  }
                }

                &.on {
                  background: $color_1;

                  .switch_text {
                    float: left;
                  }
                }

                &>.switch_circle {
                  position: absolute;
                  top: -1px;
                  left: -1px;
                  width: 24px;
                  height: 27px;
                  border: 1px solid #ddd;
                  border-radius: 50%;
                  background: #fff;
                  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                  transition: transform 0.3s;

                  &.right {
                    transform: translateX(36px);
                  }
                }
              }
            }
          }
        }
      }
    }

    .changeLoginStyle {
      margin-top: 50px;
      font-size: 28px;
      text-align: center;
    }
  }
}
</style>
