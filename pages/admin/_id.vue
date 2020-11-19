<template>
  <div class="editor-wrap">
    <div class="select-wrap">
      标题：<el-input
        v-model="form.title"
        placeholder="标题"
        style="width: 300px"
      ></el-input>
      文章分类：
      <el-select v-model="form.type" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item._id"
          :label="item.typeName"
          :value="item._id"
        >
        </el-option>
      </el-select>
      简述：<el-input
        v-model="form.desc"
        placeholder="简述"
        style="width: 300px"
      ></el-input>
    </div>
    <div>
      图片：
      <el-upload
        action="/api/files"
        class="avatar-uploader"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
      >
        <img v-if="form.imgUrl" :src="form.imgUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div class="mark">
      <no-ssr>
        <mavon-editor
          ref="md"
          v-model="form.article"
          @change="change"
          @imgAdd="$imgAdd"
          @imgDel="$imgDel"
        />
      </no-ssr>
    </div>
    <div class="btn-wrap">
      <el-button v-if="flag === 0" type="primary" @click="submit"
        >提 交</el-button
      >
      <el-button v-else type="primary" @click="save">保 存</el-button>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import { TYPE_API, FILE_API, ARTICLE_API } from '@/utils/api';

export default {
  layout: 'admin',
  components: {
    mavonEditor,
  },
  data() {
    return {
      form: {
        title: '',
        desc: '',
        type: '',
        article: '',
        article_html: '',
        imgUrl: '',
      },
      options: [],
      img_file: [],
      flag: 0, // 0 为创建  1 为修改
    };
  },
  mounted() {
    this.getList();
    this.getData();
  },
  methods: {
    async getList() {
      const res = await TYPE_API.getList();
      this.options = res.data;
    },
    handleAvatarSuccess(res) {
      this.form.imgUrl = res.data.url;
    },
    // 绑定@imgAdd event
    async $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      const formdata = new FormData();
      formdata.append('image', $file);
      this.img_file[pos] = $file;
      const res = await FILE_API.addFile(formdata);
      const _res = res.data;
      // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
      this.$refs.md.$img2Url(pos, _res.url);
    },
    async $imgDel(file) {
      await FILE_API.delFile({ name: file[1].name });
    },
    change(status, value) {
      this.form.article_html = value;
    },
    async submit() {
      const params = {
        title: this.form.title,
        desc: this.form.desc,
        type: this.form.type,
        article: this.form.article,
        article_html: this.form.article_html,
        imgUrl: this.form.imgUrl,
      };
      const res = await ARTICLE_API.addArticle(params);
      if (res.code === 0) {
        this.$notify({
          title: '成功',
          message: '文章添加成功',
          type: 'success',
        });
      }
    },
    async save() {
      const id = this.$route.params.id;
      const params = {
        id,
        title: this.form.title,
        desc: this.form.desc,
        type: this.form.type,
        article: this.form.article,
        article_html: this.form.article_html,
        imgUrl: this.form.imgUrl,
      };
      const res = await ARTICLE_API.updateArticle(params);
      if (res.code === 0) {
        this.$notify({
          title: '成功',
          message: '文章更新成功',
          type: 'success',
        });
      }
    },
    async getData() {
      const id = this.$route.params.id;
      if (id) {
        const res = await ARTICLE_API.getDetail({ id });
        this.flag = 1;
        this.form = {
          title: res.data.title,
          desc: res.data.desc,
          type: res.data.type,
          article: res.data.article,
          article_html: res.data.article_html,
          imgUrl: res.data.imgUrl,
        };
      }
    },
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
  .title-wrap {
    height: 60px;
  }
  .avatar-uploader ::v-deep {
    width: 178px;
    display: inline-block;
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      &:hover {
        border-color: #409eff;
      }
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
}
</style>
