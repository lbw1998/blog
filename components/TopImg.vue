<template>
  <div :class="{ img_wrap: true, circle: circle }">
    <div class="back_img">
      <img v-if="url" :src="url" />
      <slot v-else></slot>
    </div>
    <div v-if="type === 'simple'" class="back_title">
      <h1>{{ title }}</h1>
    </div>
    <div v-else-if="type === 'normal'" class="single-header">
      <h1 class="entry-title">{{ title }}</h1>
      <p class="entry-census">
        <span>
          <img :src="avatar" alt="" />
        </span>
        <span>{{ author }}</span>
        <span class="bull">·</span>
        <span>{{ time }} </span>
        <span class="bull">·</span>
        <span>{{ views }} 次阅读</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
    views: {
      type: Number,
      default: 0,
    },
    url: {
      type: String,
      default: '',
    },
    circle: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'simple',
    },
  },
};
</script>

<style lang="scss" scoped>
.img_wrap {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  overflow: hidden;
  .back_img {
    width: 100%;
    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      pointer-events: none;
    }
  }
  .back_title {
    top: 40%;
    position: absolute;
    left: 0px;
    right: 0px;
    text-align: center;
    color: rgb(255, 255, 255);
    z-index: 1;
    h1 {
      color: rgb(255, 255, 255);
      font-size: 40px;
      font-weight: 500;
      width: 80%;
      margin: auto;
      padding: 0px;
      border: 0px;
    }
  }
  .single-header {
    max-width: 900px;
    padding: 0px 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    top: auto;
    bottom: 20px;
    position: absolute;
    left: 0px;
    right: 0px;
    color: rgb(255, 255, 255);
    text-shadow: rgb(0, 0, 0) 2px 2px 10px;
    z-index: 1;
    .entry-title {
      font-size: 32px;
      width: 100%;
      color: rgb(255, 255, 255);
      font-weight: bold;
    }
    .entry-census {
      color: rgb(255, 255, 255);
      font-size: 14px;
      padding: 18px 0px 0px;
      line-height: 39px;
      span {
        color: rgb(255, 255, 255);
        font-size: 14px;
        img {
          width: 35px;
          height: 35px;
          border-radius: 100%;
          float: left;
          margin-right: 12px;
        }
      }
      .bull {
        margin: 0px 5px;
      }
    }
  }
}
.circle {
  &::after {
    content: '';
    width: 150%;
    height: 4.375rem;
    background: rgb(255, 255, 255);
    left: -25%;
    bottom: -2.875rem;
    border-radius: 100%;
    position: absolute;
  }
}
</style>
