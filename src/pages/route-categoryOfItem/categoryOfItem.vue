<template>
  <div class="subCateList" ref="subCateListWraper">
    <div class="subCateContainer" v-if="cateListsItem[0]">
      <div class="banner">
        <img v-lazy="cateListsItem[0].bannerUrl" alt />
      </div>
      <div class="cateList">
        <div v-for="(item, index) in cateListsItem[0].categoryList" :key="index">
          <div class="hd">{{item.name}}</div>
          <ul class="list">
            <li
              class="cateItem"
              v-for="(item, index) in cateListsItem[0].categoryList"
              :key="index"
            >
              <div class="cateImgWraper" v-if="item">
                <img v-lazy="item.bannerUrl" alt />
              </div>
              <div class="name">{{item.name}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { GET_CATELISTSITEM } from "store/mutation_types";
export default {
  name: "cateSideList",
  props: {
    id: String
  },
  computed: {
    ...mapState({
      cateListsItem: state => state.home.cateListsItem
    })
  },
  created() {},
  async beforeMount() {
    await this.initData();
    this.initCateSideListBS();
  },
  mounted() {},
  methods: {
    ...mapActions([GET_CATELISTSITEM]),
    async initData() {
      await this[GET_CATELISTSITEM](this.id);
    },
    initCateSideListBS() {
      this.$nextTick(() => {
        this.$refs.subCateListWraper &&
          new this.BScroll(this.$refs.subCateListWraper, {
            click: true
          });
      });
    }
  },
  watch: {
    $route() {
      this.initData();
    }
  }
  // beforeRouteUpdate(to, from, next) {
  //   this.initData();
  //   next();
  // }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/font_size.styl';
@import '../../common/stylus/mixin.styl';

.subCateList {
  flex: 1;
  padding: 30px 30px 21px;
  overflow: hidden;

  .subCateContainer {
    .banner {
      width: 100%;
      height: 192px;
      margin-bottom: 32px;
      background-color: #eee;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .cateList {
      width: 100%;
      height: 100%;
      overflow: auto;

      .hd {
        max-width: 528px;
        padding-bottom: 8px;
        margin-bottom: 24px;
        text-align: left;
        font-weight: 700;
        color: #333;
        border-bottom: 1px solid #d9d9d9; /* px */
        white-space: nowrap;
        font-size: 28px;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .list {
        .cateItem {
          display: inline-block;
          margin-right: 20px;
          margin-left: 10px;
          width: 140px;
          font-size: 0;
          vertical-align: top;

          .cateImgWraper {
            width: 144px;
            height: 144px;

            img {
              display: inline-block;
              width: 100%;
              height: 100%;
              background-color: #fff;
            }
          }

          .name {
            height: 72px;
            font-size: $font_2;
            color: #333;
            text-align: center;
            line-height: 36px;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
