<template>
  <div class="max-card" :class="direction">
    <div class="l-card_img">
      <slot></slot>
    </div>
    <div class="l-card_content" :class="direction">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaxCard',
  props: {
    direction: {
      type: String,
      default: 'row',
    },
  },
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
    .l-card_img {
      img {
        transform: scale(1.1);
      }
    }
  }
  .l-card_img {
    max-width: 462px;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      background-size: cover;
      transition: all 0.6s ease 0s;
    }
  }
  .l-card_content {
    min-width: 438px;
    box-sizing: border-box;
    padding: 30px;
  }
  .row {
    text-align: right;
  }
  .reverse {
    text-align: left;
  }
}

.row {
  flex-direction: row;
}
.reverse {
  flex-direction: row-reverse;
}
</style>
