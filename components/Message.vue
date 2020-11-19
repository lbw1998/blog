<!-- 后续实现 -->
<template>
  <div class="message-wrap">
    <div class="message"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.message-wrap {
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10000;
  .message {
    background: #fe9600;
    color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: inline-block;
    font-size: 14px;
    margin-bottom: 0;
    padding: 12px 25px;
    z-index: 10000;
    margin-top: -4px;
  }
}
</style>
