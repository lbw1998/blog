<template>
  <div :class="{ Head: true, show: scrollTop }">
    <div class="logo">{{ title }}</div>
    <div class="menu">
      <ul>
        <li v-for="(item, index) in menuList" :key="index">
          <span class="menu-item">
            <i :class="`iconfont ${item.icon}`"></i>
            {{ item.label }}
          </span>
        </li>
        <Dropdown>
          <li>
            <span class="menu-item">
              <i class="iconfont icon-list-ul"></i>
              分类
            </span>
          </li>
        </Dropdown>
      </ul>
      <div class="btn-wrap">
        <i
          aria-label="icon: search"
          tabindex="-1"
          class="anticon anticon-search"
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            class
            data-icon="search"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
            />
          </svg>
        </i>
        <i aria-label="icon: user" tabindex="-1" class="anticon anticon-user">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            class
            data-icon="user"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
            />
          </svg>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown';

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      scrollTop: false,
      title: 'logo',
      searchShow: false,
      menuList: [
        {
          icon: 'icon-fort-awesome',
          label: '首页',
        },
        {
          icon: 'icon-archive',
          label: '时间轴',
        },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
    },
  },
};
</script>

<style lang="scss" scoped>
.Head {
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0px;
  z-index: 999;
  padding: 0px 30px;
  box-sizing: border-box;
  transition: all 0.4s ease 0s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 40px -8px;
    background: rgba(255, 255, 255, 0.95);
  }
  .logo {
    color: rgb(70, 70, 70);
    font-size: 20px;
    font-weight: 800;
  }
  .menu {
    color: rgb(102, 102, 102);
    ul {
      display: inline-block;
      vertical-align: super;
      li {
        display: inline-block;
        padding: 0 15px;
        .menu-item {
          cursor: pointer;
          position: relative;
          i {
            vertical-align: middle;
            display: inline-block;
          }
          &:hover {
            color: #fe9600;
          }
          &:hover::after {
            width: 100%;
          }
          &::after {
            width: 0px;
            content: '';
            display: block;
            position: absolute;
            bottom: -32px;
            height: 6px;
            background-color: rgb(254, 150, 0);
            transition: width 0.25s ease-in-out 0s;
          }
        }
        .active::after {
          width: 100%;
          content: '';
          display: block;
          position: absolute;
          bottom: 0px;
          height: 6px;
          background-color: rgb(254, 150, 0);
          transition: width 0.25s ease-in-out 0s;
        }
      }
    }
  }
  .btn-wrap {
    display: inline-block;
    font-size: 24px;
    i:hover {
      color: rgb(254, 150, 0);
      cursor: pointer;
    }
  }
}
.show {
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 40px -8px;
  background: rgba(255, 255, 255, 0.95);
}
</style>
