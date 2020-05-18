<template >
  <div class="moduleTitle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ModuleTitle"
};
</script>

<style scoped lang="stylus">
.moduleTitle {
  width: 100%;
  height: 100px;
  line-height: 100px;
  padding: 0 30px;
  background-color: #fff;
  font-size: 32px;
  overflow: hidden;
}
</style>
