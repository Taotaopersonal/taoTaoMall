<template>
  <div class="subCateList">
    <div class="subCateContainer">
      <div class="banner">
        <img src="" alt />
      </div>
      <div class="cateList">
        <div class="hd"></div>
        <ul class="list">
          <li class="cateItem">
            <div class="cateImgWraper">
              <img src="" alt />
            </div>
            <div class="name">{{id}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import {GET_CATELISTSITEM} from 'store/mutation_types'
export default {
  name: "cateSideList",
  props: {
    id: String,
  },
  computed: {
    ...mapState({
      cateListsItem:state=>state.home.cateListsItem
    })
  },
  mounted() {
    this.initData()
  },
  methods: {
    ...mapActions([GET_CATELISTSITEM]),
    async initData(){
      await this[GET_CATELISTSITEM](this.id)
    }
  },
  beforeUpdate() {
    this.initData()
  },
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/font_size.styl';
@import '../../common/stylus/mixin.styl';

.subCateList {
  flex: 1;
  padding: 30px 30px 21px;
  height: height 100%;
  overflow: auto;

  .subCateContainer {
    height: 2000px;

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
