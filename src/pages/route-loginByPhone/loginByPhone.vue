<template>
  <div class="loginByPhone">
    <base-page-header class="header">
      <img class="logo" src="./img/logo.png" alt />
    </base-page-header>
    <div class="ctn">
      <div class="bigLogo">
        <img class="logo" src="./img/logo.png" alt />
      </div>

      <div class="form_of_loginByPhone">
        <ValidationObserver
          v-slot="{ invalid }"
          class="login_content"
          data-vv-validate-on="change|blur"
        >
          <form @submit.prevent="onSubmit" class="login_message">
            <div class="phoneIptContainer">
              <ValidationProvider
                name="phone"
                :rules="{required:true,regex:phoneReg}"
                v-slot="{ errors }"
                class="valArea"
              >
                <div class="phoneIpt">
                  <input v-model="phoneNumber" maxlength="11" type="tel" placeholder="请输入手机号" />
                  <i v-show="hasImport" class="iconfont icon-deletorerror" @click="clearIpt"></i>
                </div>
                <span class="tipInfo" style="color:rgba(255,0,0,.8)">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="codeIptContainer">
              <ValidationProvider
                name="code"
                :rules="{required:true,digits:6}"
                v-slot="{ errors }"
                class="valArea"
              >
                <div class="codeIpt">
                  <input v-model="code" maxlength="6" type="text" placeholder="请输入短信验证码" />
                  <button
                    type="submit"
                    :disabled="!phoneNumberIsRight"
                    class="get_verification"
                    :class="{active:phoneNumberIsRight}"
                    @click.prevent="getCode"
                  >{{times>0 ? `验证码已发送${times}s` :`获取验证码`}}</button>
                </div>
                <span class="tipInfo" style="color:rgba(255,0,0,.8)">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <button class="loginBtn" :disabled="invalid">登录</button>
          </form>
        </ValidationObserver>
        <div class="changeLoginStyle" @click="$router.replace('/loginByPwd')">使用密码验证登录&nbsp;&gt;</div>
      </div>
    </div>
  </div>
</template>

<script>
import pageheader from "components/base-pageHeader/pageHeader.vue";
import { Toast } from "vant";
import { mapActions, mapState } from "vuex";
import { GET_LOGIN_INFO } from "store/mutation_types";
const OK = 0;
const ERROR = 1;
export default {
  name: "loginByPhone",
  data: () => ({
    times: 0,
    flag: true,
    loginWay: "message", //登录方式

    // 表单数据
    phoneNumber: "",
    phoneReg: /^1[345678]\d{9}$/,
    code: ""
  }),
  components: {
    "base-page-header": pageheader
  },
  computed: {
    ...mapState({
      loginData: state => state.login.loginData
    }),
    phoneNumberIsRight() {
      let res = this.phoneReg.test(this.phoneNumber);
      return this.flag && res;
    },
    hasImport() {
      return this.phoneNumber ? true : false;
    }
  },
  methods: {
    ...mapActions([GET_LOGIN_INFO]),
    onSubmit() {
      this.login();
    },
    async getCode() {
      // 此部分是处理按钮倒计时和显示状态的逻辑
      this.flag = false;
      this.times = 30;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.times <= 1) {
          this.flag = true;
          clearInterval(this.timer);
        }
        this.times--;
      }, 1000);

      // 此部分是具体发送验证码的逻辑
      const { code, msg } = await this.$http.login.getCode({
        phone: this.phoneNumber
      });
      if (code === OK) Toast.success("短信验证码发送成功");
      if (code === ERROR) {
        Toast.fail(msg);
        this.times = 0;
      }
    },
    async login() {
      await this[GET_LOGIN_INFO]({
        loginWay: this.loginWay,
        phone: this.phoneNumber,
        code: this.code
      });
    },
    // 电话表单清除按钮
    clearIpt() {
      this.phoneNumber = "";
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';
@import '../../common/stylus/color.styl';
@import '../../common/stylus/font_size.styl';

.loginByPhone {
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

    .form_of_loginByPhone {
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

          .phoneIptContainer, .codeIptContainer {
            .valArea {
              display: block;
              width: 100%;
              height: 135px;

              .phoneIpt, .codeIpt {
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
                  border: none;
                  background-color: transparent;
                  opacity: 0.5;
                  white-space: nowrap;

                  &.active {
                    opacity: 1;
                  }
                }

                >input {
                  flex: 1;
                  height: 80px;
                  font-size: 28px;
                  background-color: transparent;
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
