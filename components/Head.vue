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
          class="iconfont icon-search"
          style="font-size: 26px;"
          @click="isShow = !isShow"
        ></i>
        <i class="iconfont icon-user" style="font-size: 26px;"></i>
      </div>
    </div>
    <div :class="{ is_visible: isShow }" class="search-wrap">
      <div class="search-inner">
        <div class="box">
          <p>想要找点什么呢？</p>
          <i class="iconfont icon-search"></i>
          <input
            v-model="search"
            type="search"
            placeholder="Search"
            @keyup.enter="jumpTo('search-id', search)"
          />
        </div>
      </div>
      <i class="iconfont icon-close" @click="isShow = false"></i>
    </div>
  </div>
</template>

<script>
import utils from '@/assets/mixins/utils.js';

export default {
  mixins: [utils],
  data() {
    return {
      scrollTop: false,
      isShow: false,
      search: '',
      title: 'logo',
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
  $--color--warn: #fe9600;

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
            color: $--color--warn;
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
            background-color: $--color--warn;
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
          background-color: $--color--warn;
          transition: width 0.25s ease-in-out 0s;
        }
      }
    }
  }
  .btn-wrap {
    display: inline-block;
    font-size: 24px;
    i:hover {
      color: $--color--warn;
      cursor: pointer;
    }
  }
  .search-wrap {
    transition: visibility 0.25s ease 0s, opacity 0.25s ease 0s;
    overflow: hidden;
    z-index: 999;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    background: rgb(255, 255, 255);
    visibility: hidden;
    opacity: 0;
    .search-inner {
      max-width: 640px;
      text-align: left;
      position: absolute;
      left: 0px;
      right: 0px;
      height: 285px;
      top: 0px;
      bottom: 0px;
      padding: 0px 20px;
      margin: auto;
      .box {
        position: relative;
        p {
          padding-left: 24px;
          color: rgb(64, 64, 64);
          font-size: 15px;
          line-height: 1.5;
          margin: 15px 0px 22px;
        }
        i {
          font-size: 2rem;
          line-height: 1;
          color: rgb(221, 221, 221);
          position: absolute;
          bottom: 10px;
          margin-top: -16px;
          left: 16px;
        }
        input {
          font-size: 1.5rem;
          width: 100%;
          color: rgb(102, 102, 102);
          background: rgb(255, 255, 255);
          padding: 12px 24px 12px 64px;
          outline: none;
          border-radius: 50px;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(204, 204, 204);
          border-image: initial;
        }
      }
    }
    .icon-close {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
      font-size: 30px;
    }
  }
  .is_visible {
    visibility: visible;
    opacity: 0.99;
    animation: 0.5s ease 0s 1 normal none running elastic;
    background-image: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.2.1/img/other/iloli.gif);
    background-repeat: no-repeat;
    background-position: right bottom;
  }
}
.show {
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 40px -8px;
  background: rgba(255, 255, 255, 0.95);
}
</style>
