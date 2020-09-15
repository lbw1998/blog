<template>
  <div class="divider-wrap">
    <h1>
      <i class="iconfont" :class="icon"></i>
      <span><slot></slot></span>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'icon-envira',
    },
  },
};
</script>

<style lang="scss" scoped>
.divider-wrap {
  width: 100%;
  height: 100%;
  h1 {
    color: rgb(102, 102, 102);
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    line-height: 24px;
    padding-bottom: 5px;
    margin-bottom: 30px;
    border-bottom: 1px dashed rgb(236, 236, 236);
  }
}
</style>
