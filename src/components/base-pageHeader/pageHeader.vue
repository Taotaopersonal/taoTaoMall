<template>
  <header id="headerWraper">
    <div class="topbar">
      <div class="content">
        <div class="left">
          <router-link to="/home">
            <i class="iconfont icon-shouye1"></i>
          </router-link>
        </div>
        <div class="middle">
          <slot class="logon"></slot>
        </div>
        <div class="right">
          <router-link to="/search">
            <i class="iconfont icon-chaxun"></i>
          </router-link>
          <router-link to="/cart">
            <i class="iconfont icon-gouwuche"></i>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "pageHeader"
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';

#headerWraper {
  width: 100%;
  height: 90px;

  .topbar {
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    border-bottom: 1px solid #d9d9d9; /* px */

    .content {
      btwCenter();
      width: 100%;
      height: 100%;
      padding: 0 26px 0 24px;

      a {
        display: block;
        width: 100%;
        height: 100%;
      }

      .middle {
        btwCenter();
        font-size: 36px;
        color: black;

        .logo {
          width: 130px;
          height: 65px;
        }
      }

      .right {
        display: flex;
      }

      .left>a i, .right>a i {
        font-size: 48px;
        font-weight: 600;
        color: black;
      }

      .right>a:last-child {
        margin-left: 30px;
      }
    }
  }
}
</style>
