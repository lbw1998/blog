<template>
  <div class="type-wrap">
    <div class="button-wrap">
      分类名称：
      <el-input
        v-model="typeName"
        placeholder="分类名称"
        style="width: 300px;"
      ></el-input>
      <el-button type="primary" @click="addType">新 增</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%;">
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column prop="typeName" label="名称"> </el-table-column>
      <el-table-column prop="createdAt" label="创建时间"> </el-table-column>
      <el-table-column prop="updatedAt" label="更新时间"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row._id, scope.row.name)"
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
import { TYPE_API } from '@/utils/api';

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
    handleEdit(id, name) {
      this.$prompt('重命名', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: name,
        closeOnClickModal: false,
      }).then(async ({ value }) => {
        const params = {
          id,
          typeName: value,
        };
        const res = await TYPE_API.updateType(params);
        if (res.code === 0) {
          this.$message.success('操作成功');
          this.getTableList();
        }
      });
    },
    async getTableList() {
      const res = await TYPE_API.getList();
      if (res.code === 0) {
        this.tableData = res.data;
      }
    },
    async handleDelete(id) {
      const res = await TYPE_API.delType({ id });
      if (res.code === 0) {
        this.$message.success('删除成功');
        this.getTableList();
      }
    },
    async addType() {
      const res = await TYPE_API.addType({ typeName: this.typeName });
      if (res.code === 0) {
        this.$message.success('新增成功');
        this.getTableList();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
