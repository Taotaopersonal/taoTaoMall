<template>
  <div class="category">
    <header id="searchWraper">
      <ele-search class="searchIpt" :totalNumbersOfProducts="totalNumbersOfProducts"></ele-search>
    </header>
    <section id="ctn">
      <div class="sideWraper">
        <van-sidebar class="sidebar" v-model="activeKey" v-if="cateNavDatas">
          <van-sidebar-item
            class="sidebarItem"
            :class="{active:currentIndex === activeKey}"
            v-for="(item, index) in cateNavDatas.categoryL1List"
            :key="index"
            :title="item.name"
            @click="$router.replace(`/categroy/${item.id}`)"
          />
        </van-sidebar>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </section>
  </div>
</template>

<script>
import search from "components/ele-search/ele-search.vue";
import { mapState, mapActions } from "vuex";
import {
  GET_TOTAL_NUMBERS_OF_PRODUCTS,
  GET_CATENAVDATAS
} from "store/mutation_types";
//侧边导航组件
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";

Vue.use(Sidebar);
Vue.use(SidebarItem);

export default {
  name: "RouteCategroy",
  data() {
    return {
      activeKey: 0,
      currentIndex: 0
    };
  },
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    "ele-search": search
  },
  computed: {
    ...mapState({
      totalNumbersOfProducts: state => state.home.totalNumbersOfProducts,
      cateNavDatas: state => state.home.cateNavDatas
    })
  },
  created() {},
  beforeMount() {
    this.initData();
  },
  mounted() {},
  methods: {
    ...mapActions([GET_TOTAL_NUMBERS_OF_PRODUCTS, GET_CATENAVDATAS]),
    async initData() {
      await this[GET_TOTAL_NUMBERS_OF_PRODUCTS]();
      await this[GET_CATENAVDATAS]();
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';
@import '../../common/stylus/font_size.styl';
@import '../../common/stylus/color.styl';

.category {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  background-color: #fff;

  #searchWraper {
    height: 88px;
    padding: 0 30px;
    inlineCenter();
    border-px(#d9d9d9, 2px);
  }

  #ctn {
    display: flex;
    flex: 1;
    padding-bottom: 99px;
    overflow: auto;

    .sideWraper {
      width: 162px;
      height: 100%;
      background-color: #fff;
      border-right: 1px solid #d9d9d9;

      /deep/.van-sidebar {
        overflow: hidden;
      }
    }

    .sidebar {
      padding: 40px 0;

      .sidebarItem {
        background-color: transparent;
        inlineCenter();
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin-top: 40px;
        padding: 0;
        font-size: $font_1;

        &:before {
          height: 100%;
          background-color: $color_1;
        }

        &:first-child {
          margin-top: 0;
        }

        &.van-sidebar-item--select {
          color: $color_1;
        }
      }
    }
  }
}
</style>
