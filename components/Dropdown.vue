<template>
  <div class="drop-down" @mouseenter="show" @mouseleave="flag = false">
    <slot></slot>
    <ul v-show="flag" class="drop-menu">
      <li>123333</li>
      <li>2</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    show() {
      setTimeout(() => {
        this.flag = true;
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-down {
  display: inline-block;
  position: relative;
  text-align: center;
  .drop-menu {
    position: absolute;
    padding: 10px;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    text-align: center;
    list-style-type: none;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 40px -8px;
    &::before {
      position: absolute;
      top: -10px;
      right: 0;
      bottom: -7px;
      left: -7px;
      z-index: -9999;
      opacity: 0.00001;
      content: ' ';
    }
    li:first-of-type::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 50%;
      margin-left: -10px;
      border-style: solid;
      border-width: 10px;
      border-color: transparent transparent rgb(255, 255, 255);
    }
    li {
      clear: both;
      margin: -5px -12px;
      padding: 5px 12px;
      color: rgba(0, 0, 0, 0.65);
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: #fe9600;
      }
    }
  }
}
</style>
