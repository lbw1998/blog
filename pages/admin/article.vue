<template>
  <div class="type-wrap">
    <el-table :data="tableData" style="width: 100%;">
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column prop="title" label="名称"> </el-table-column>
      <el-table-column prop="type.typeName" label="分类"> </el-table-column>
      <el-table-column prop="author.nickname" label="作者"> </el-table-column>
      <el-table-column prop="views" label="点击量"> </el-table-column>
      <el-table-column prop="createdAt" label="创建时间"> </el-table-column>
      <el-table-column prop="updatedAt" label="更新时间"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row._id)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row._id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ARTICLE_API } from '@/utils/api';

export default {
  layout: 'admin',
  data() {
    return {
      tableData: [],
      typeName: '',
    };
  },
  created() {
    this.getTableList();
  },
  methods: {
    handleEdit(id) {
      this.$router.push('/admin/' + id);
    },
    async getTableList() {
      const res = await ARTICLE_API.getList();
      if (res.code === 0) {
        this.tableData = res.data;
      }
    },
    async handleDelete(id) {
      const res = await ARTICLE_API.delArticle({ id });
      if (res.code === 0) {
        this.$message.success('删除成功');
        this.getTableList();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
