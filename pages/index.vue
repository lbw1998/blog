<template>
  <div class="container">
    <div class="banner-wrap">
      <div class="banner">
        <div class="arrow-wrap">
          <i class="iconfont icon-chevrondown arrow"></i>
        </div>
      </div>
      <Wave></Wave>
    </div>
    <div class="content">
      <div class="content-top">
        <Divider icon="icon-anchor">START:DASH!!</Divider>
        <div class="card-wrap">
          <Card title="这里是标题" content="乌拉~">
            <img src="../assets/img/banner.png" />
          </Card>
          <Card></Card>
          <Card></Card>
        </div>
        <Divider>START:!!</Divider>
        <Card title="这里是标题" type="max" content="乌拉~">
          <img src="../assets/img/banner.png" />
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Wave from '@/components/Wave';
import Divider from '@/components/Divider';
import Card from '@/components/Card';

export default {
  components: {
    Wave,
    Divider,
    Card,
  },
};
</script>

<style lang="scss" scoped>
.container {
  .banner-wrap {
    .banner {
      width: 100%;
      height: 937px;
      background-image: url('../assets/img/banner.png ');
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
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
    .wave {
      position: absolute;
      bottom: 0;
    }
  }
  .content {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0px 10px;
    .content-top {
      width: 100%;
      margin-top: 100px;
      .card-wrap {
        display: flex;
        justify-content: space-between;
        .l-card {
          flex: 1;
          padding: 0 8px 0 8px;
        }
      }
    }
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
