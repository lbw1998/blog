<template>
  <div class="container">
    <div class="banner-wrap">
      <div class="banner"></div>
      <div class="arrow-wrap">
        <i class="iconfont icon-chevrondown arrow"></i>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  .banner-wrap {
    .banner {
      width: 100%;
      height: 937px;
      background-image: url('../assets/img/banner.png ');
      background-attachment: fixed;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      z-index: 3;
      background-attachment: fixed;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAADAQMAAACDJEzCAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMAM8lDrC4AAAALSURBVAjXYwCBAwAAxgDB3319agAAAABJRU5ErkJggg==);
    }
    .arrow-wrap {
      position: absolute;
      bottom: 80px;
      left: 50%;
      cursor: pointer;
      z-index: 90;
      animation: 2s linear 0s infinite normal none running float;
      .arrow {
        font-size: 32px;
        color: rgb(255, 255, 255);
        transform: scale(1.5, 1);
      }
    }
  }
  .content {
    height: 1000px;
  }
}

// 动画特效
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-6px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
