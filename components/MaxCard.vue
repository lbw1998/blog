<template>
  <div class="max-card">
    <div class="post-img">
      <slot></slot>
    </div>
    <div class="post-content"></div>
  </div>
</template>

<script>
export default {
  name: 'MaxCard',
};
</script>

<style lang="scss" scoped>
.max-card {
  width: 100%;
  height: 300px;
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 20px -6px;
  opacity: 1;
  overflow: hidden;
  margin: 30px 0px;
  border-radius: 10px;
  transition: box-shadow 0.3s ease 0s;
  display: flex;
  box-sizing: border-box;
  &:hover {
    box-shadow: rgba(110, 110, 110, 0.4) 0px 5px 10px 5px;
    .post-img {
      img {
        transform: scale(1.1);
      }
    }
  }
  .post-img {
    width: 55%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      background-size: cover;
      transition: all 0.6s ease 0s;
    }
  }
  .post-content {
    width: 45%;
    height: 100%;
  }
}
</style>
