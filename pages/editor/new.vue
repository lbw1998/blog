<template>
  <div class="editor-wrap">
    <div class="select-wrap">
      文章分类：
      <el-select v-model="select" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="mark">
      <no-ssr>
        <mavon-editor v-model="value" />
      </no-ssr>
    </div>
    <div class="btn-wrap">
      <el-button type="primary">提 交</el-button>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export default {
  layout: 'admin',
  components: {
    mavonEditor,
  },
  data() {
    return {
      select: '',
      value: '',
      options: [
        {
          value: 'zhinan',
          label: '指南',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.editor-wrap {
  .select-wrap {
    height: 60px;
  }
  .btn-wrap {
    padding-top: 20px;
    height: 60px;
  }
}
</style>
