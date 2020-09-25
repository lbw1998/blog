<template>
  <div class="l-card">
    <div class="img-box">
      <slot></slot>
    </div>
    <div class="info">
      <h3 class="info-title">
        {{ title }}
      </h3>
      <p class="info-content">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题',
    },
    content: {
      type: String,
      default: '内容',
    },
  },
};
</script>

<style lang="scss" scoped>
.l-card {
  position: relative;
  width: 100%;
  height: 160px;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 3px;
  overflow: hidden;
  border-radius: 10px;
  & + .l-card {
    margin-left: 16px;
  }
  &:hover {
    .img-box {
      transform: scale(1.2);
    }
    .info {
      visibility: visible;
      opacity: 1;
      .info-title {
        transform: translateX(0px);
      }
      .info-content {
        transform: translateX(0px);
      }
    }
  }
  .img-box {
    transform: scale(1);
    width: 100%;
    height: 100%;
    transition: all 0.35s ease-in-out 0s;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    text-align: center;
    backface-visibility: hidden;
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.6);
    transition: all 0.35s ease-in-out 0s;
    .info-title {
      text-transform: uppercase;
      color: rgb(255, 255, 255);
      text-align: center;
      font-size: 17px;
      transform: translateX(-100%);
      padding: 10px;
      background: rgb(17, 17, 17);
      margin: 40px 0px 0px;
      transition: all 0.35s ease-in-out 0s;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .info-content {
      font-style: italic;
      font-size: 12px;
      position: relative;
      color: rgb(187, 187, 187);
      text-align: center;
      transform: translateX(100%);
      margin-top: 15px;
      height: 40px;
      line-height: 20px;
      padding: 0px 20px;
      transition: all 0.35s linear 0.1s;
      text-overflow: ellipsis;
      display: flex;
      justify-content: center;
      overflow: hidden;
    }
  }
}
</style>
