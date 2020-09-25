<template>
  <div class="wave">
    <div class="wrap">
      <div class="waveTop"></div>
    </div>
    <div class="wrap">
      <div class="waveMiddle"></div>
    </div>
    <div class="wrap">
      <div class="waveBottom"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wave {
  width: 100%;
  height: 100px;
  z-index: 4;
  position: absolute;
  left: 0px;
  overflow: hidden;
  .wrap {
    width: 100%;
    height: 100%;
    bottom: 0;
    position: absolute;
    .waveTop {
      height: 100%;
      background: url('../static/img/wave1.png');
      background-size: cover;
      z-index: 15;
      opacity: 0.5;
    }
    .waveMiddle {
      height: 100%;
      background: url('../static/img/wave2.png');
      background-size: 50% 120px;
      z-index: 10;
      opacity: 0.75;
      width: 200%;
      background-repeat: repeat-x;
      transform-origin: center bottom;
      animation: 10s linear 0s infinite normal none running move_wave;
    }
    .waveBottom {
      height: 100%;
      background: url('../static/img/wave3.png');
      background-size: 50% 120px;
      z-index: 10;
      width: 200%;
      background-repeat: repeat-x;
      transform-origin: center bottom;
      animation: 15s linear 0s infinite normal none running move_wave;
    }
  }
}
</style>
