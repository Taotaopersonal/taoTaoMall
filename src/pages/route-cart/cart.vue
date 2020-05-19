<template>
  <div class="cart">
    <header class="cartHeader">
      <div class="headerWarper">
        <div class="top">
          <div class="title">购物车</div>
          <router-link to="/home" class="coupon">领券</router-link>
        </div>
        <div class="bottom">
          <ele-service-policy :fontSize="2" color="rgba(0,0,0,.1)" :policyDescList="policyDescList"></ele-service-policy>
        </div>
      </div>
    </header>
    <div class="ctnBeforeLogin" v-if="!token">
      <div class="container">
        <div class="img"></div>
        <div class="txt">
          <div class="btn" @click="$router.replace('/profile')">登录</div>
        </div>
      </div>
    </div>
    <div class="ctnAfterLogin" v-if="token">
      <div class="container">这里展示的是用户购物车详情页</div>
    </div>
  </div>
</template>

<script>
import servicePolicy from "components/base-servicePolicy/servicePolicy.vue";
import { mapState } from "vuex";
export default {
  name: "RouteCart",
  data() {
    return {
      policyDescList: [
        {
          icon: "xiaoyuandian",
          schemeUrl: "",
          desc: "30天无忧退货"
        },
        {
          icon: "xiaoyuandian",
          schemeUrl: "",
          desc: "48小时快速退款"
        },
        {
          icon: "xiaoyuandian",
          schemeUrl: "",
          desc: "满99元免邮费"
        }
      ]
    };
  },
  components: {
    "ele-service-policy": servicePolicy
  },
  computed: {
    ...mapState({
      token: state => state.login.token
    })
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/color.styl';
@import '../../common/stylus/mixin.styl';

.cart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  background-color: #fff;
  overflow: hidden;

  .cartHeader {
    width: 100%;
    overflow: hidden;

    .headerWarper {
      width: 100%;

      .top {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 0 20px;
        height: 88px;
        line-height: 88px;
        font-size: 36px;

        .title {
          margin-left: 10px;
        }

        .coupon {
          font-size: 30px;
          margin-right: 41px;
          color: $color_1;
        }
      }

      .bottom {
        background-color: #eee;
      }
    }
  }

  .ctnBeforeLogin, .ctnAfterLogin {
    flex: 1;
    background-color: #f4f4f4;

    .container {
      position: absolute;
      left: 0;
      bottom: 0;
      top: 85px;
      right: 0;
      height: 300px;
      margin: auto;
      text-align: center;

      .img {
        display: inline-block;
        width: 248px;
        height: 248px;
        bg-image(cart_icon, webp);
      }

      .txt {
        width: 100%;
        height: 95px;
        display: flex;
        justify-content: center;
        align-items: center;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 65%;
          height: 100%;
          margin-top: 50px;
          border-radius: 5px;
          background-color: $color_1;
          color: #ffffff;
          font-size: 30px;
        }
      }
    }
  }
}
</style>
