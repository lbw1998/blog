<template>
  <div class="admin-wrap">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" mode="horizontal">
          <el-menu-item index="0">
            主站
          </el-menu-item>

          <el-menu-item index="1">写文章</el-menu-item>
          <!-- <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu> -->
          <el-menu-item index="3">文章列表</el-menu-item>
          <div class="exit" @click="exit()">
            退出
          </div>
        </el-menu>
      </el-header>
      <el-main> <Nuxt /> </el-main>
    </el-container>
  </div>
</template>

<script>
import Head from '../components/Head.vue';
import Foot from '../components/Foot.vue';

export default {
  components: Head,
  Foot,
  methods: {
    exit() {
      this.$router.replace('/unadmin');
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-wrap {
  width: 100vw;
  height: 100vh;
  .exit {
    float: right;
    height: 60px;
    line-height: 60px;
    color: #409eff;
    cursor: pointer;
    &:hover {
      text-decoration-line: underline;
    }
  }
}
</style>
