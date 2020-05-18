<template>
  <div class="search" v-if="initData">
    <header class="searchTop">
      <form action="/">
        <van-search
          v-if="initData.defaultKeyword"
          v-model.trim="value"
          show-action
          :placeholder="initData.defaultKeyword.keyword"
          @cancel="$router.replace('/home')"
          action-text="取消"
          shape="round"
          autofocus
        />
      </form>
    </header>
    <div class="search_hot" v-show="isShowSearchHot">
      <div class="searchCtn">
        <div class="title">热门搜索</div>
        <ul class="list" v-if="initData">
          <li class="item" v-for="(item, index) in initData.hotKeywordVOList" :key="index">
            <a
              class="link"
              :class="{highlight:item.highlight}"
              :href="item.schemeUrl"
            >{{item.keyword}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="search_res" v-show="!isShowSearchHot">
      <ul class="list-searchres">
        <li class="item" v-for="(item, index) in autoSearchData" :key="index">
          <a :href="`https://m.you.163.com/search?keyword=${item}&_stat_search=history`">
            <span>{{item}}</span>
            <i class="iconfont icon-rightarrow-"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
import _ from "lodash";
export default {
  name: "Search",
  data() {
    return {
      value: "",
      isShowSearchHot: true,
      initData: [],
      autoSearchData: []
    };
  },
  created() {},
  beforeMount() {
    this.getInitData();
    this.throttleSearchFn = _.throttle(this.questSearchFn, 500);
  },
  mounted() {},
  watch: {
    value() {
      this.isShowSearchHot = this.value ? false : true;
      this.throttleSearchFn();
    }
  },
  methods: {
    async getInitData() {
      const { code, data } = await this.$http.search.getInitData();
      if (code === "200") this.initData = data;
    },
    async questSearchFn() {
      const { code, data } = await this.$http.search.getAutoSearchData({
        keywordPrefix: this.value
      });
      if (code === "200") this.autoSearchData = data;
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getInitData();
    });
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';

.search {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .searchTop {
    /deep/.van-search__content {
      background-color: #f4f4f4;

      .van-field {
        padding: 5px 0;
      }
    }

    /deep/ .van-search__action {
      padding: 0 30px;
    }
  }

  .search_hot {
    .searchCtn {
      background-color: #fff;

      .title {
        line-height: 75px;
        font-size: 28px;
        margin-left: 25px;
        margin-top: -10px;
        color: #999;
      }

      .list {
        display: flex;
        flex-flow: row wrap;
        padding-bottom: 50px;
        margin-left: 5px;

        .item {
          border: 1px solid #999;
          border-radius: 5px;
          margin: 15px 20px;
          padding: 0 10px;

          .link {
            font-size: 26px;
            line-height: 45px;
            color: rgba(0, 0, 0, 0.8);

            &.highlight {
              border-color: #DD1A21;
              color: #DD1A21;
            }
          }
        }
      }
    }
  }

  .search_res {
    width: 100%;
    background: #fff;

    .list-searchres {
      padding-left: 25px;

      .item {
        width: 100%;
        padding: 25px 0;
        line-height: 30px;
        font-size: 28px;

        .iconfont {
          float: right;
          margin-right: 20px;
          font-size: 65px;
        }

        border-px(#d9d9d9, 2px);
      }
    }
  }
}
</style>
