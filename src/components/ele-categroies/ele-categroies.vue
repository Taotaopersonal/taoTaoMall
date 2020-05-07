<template>
  <div class="goodCategories">
    <div class="cateWrap">
      <a class="cateItem" href="javascript">
        <div class="icon">
          <img data-src="holder.js/110x110" />
        </div>
        <div class="txt">新品首发</div>
      </a>
      <a class="cateItem" href="javascript">
        <div class="icon">
          <img data-src="holder.js/110x110" />
        </div>
        <div class="txt">新品首发</div>
      </a>
      <a class="cateItem" href="javascript">
        <div class="icon">
          <img data-src="holder.js/110x110" />
        </div>
        <div class="txt">新品首发</div>
      </a>
      <a class="cateItem" href="javascript">
        <div class="icon">
          <img data-src="holder.js/110x110" />
        </div>
        <div class="txt">新品首发</div>
      </a>
      <a class="cateItem" href="javascript">
        <div class="icon">
          <img data-src="holder.js/110x110" />
        </div>
        <div class="txt">新品首发</div>
      </a>
      <a class="cateItem" href="javascript">
        <div class="icon">
          <img data-src="holder.js/110x110" />
        </div>
        <div class="txt">新品首发</div>
      </a>
      <a class="cateItem" href="javascript">
        <div class="icon">
          <img data-src="holder.js/110x110" />
        </div>
        <div class="txt">新品首发</div>
      </a>
      <a class="cateItem" href="javascript">
        <div class="icon">
          <img data-src="holder.js/110x110" />
        </div>
        <div class="txt">新品首发</div>
      </a>
      <a class="cateItem" href="javascript">
        <div class="icon">
          <img data-src="holder.js/110x110" />
        </div>
        <div class="txt">新品首发</div>
      </a>
      <a class="cateItem" href="javascript">
        <div class="icon">
          <img data-src="holder.js/110x110" />
        </div>
        <div class="txt">新品首发</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodCategroies"
};
</script>

<style scoped lang="stylus">
.goodCategories {
  width: 100%;
  height: 372px;

  .cateWrap {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 100%;
    height: auto;

    .cateItem {
      width: 110px;
      height: 156px;
      margin: 10px 20px 9px 20px;

      .icon {
        width: 110px;
        height: 110px;
        background-color #ccc
        border-radius 30px
        overflow hidden
       
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .txt{
        color: rgb(51, 51, 51);
          margin-top: 10px;
          font-size: 24px;
          text-align: center;
          line-height: 36px;
          white-space: nowrap;
      }
    }
  }
}
</style>
