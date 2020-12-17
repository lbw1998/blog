<!-- eslint-disable vue/attribute-hyphenation -->

<template>
  <div class="comments-main">
    <h3 class="comments-list-title">
      Comments | <span class="noticom">{{ count }} 条评论 </span>
    </h3>
    <!-- 评论 -->
    <CommentItem
      v-for="(item, index) in commentList"
      :key="index"
      :content="item.content"
      :userinfo="item.vid"
      :time="item.createdAt"
      :cid="item._id"
      :form="form"
      @changeShow="changeShow"
    >
      <template v-if="item.children">
        <CommentItem
          v-for="(item1, index1) in item.children"
          :key="index1"
          :content="item1.content"
          :userinfo="item1.vid"
          :time="item.createdAt"
          :cid="item1._id"
          :toNickname="item1.to_vid.nickname"
          :form="form"
          @changeShow="changeShow"
        >
        </CommentItem>
      </template>
    </CommentItem>
    <Pagination :total="total" @currentChange="getComment"></Pagination>
    <!-- 输入框 -->
    <CommentInput v-show="show" :form="form" :type="type"></CommentInput>
  </div>
</template>

<script>
import { COMMENT_API, MESSAGE_API } from '@/utils/api';
import CommentItem from './components/CommentItem';
import CommentInput from './components/CommentInput';

export default {
  components: { CommentItem, CommentInput },
  provide() {
    return {
      getComment: this.getComment,
    };
  },
  props: {
    imgUrl: {
      type: String,
      default: '',
    },
    articleId: {
      type: String,
      default: '',
    },
    // 判断是留言板/文章评论
    // 代码设计有问题,本来想做成可以复用的组件,结果到后面发现设计思路有问题,后期如果不犯懒了改
    type: {
      type: String,
      default: 'comment',
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      form: {
        radio: false,
        content: '',
        nickname: '',
        qq: '',
        avatar: '',
        email: '',
      },
      commentList: [],
      show: true,
      total: 0,
    };
  },
  mounted() {
    this.getComment();
  },
  methods: {
    async getComment(pageNum) {
      let res;
      if (this.type === 'comment') {
        // 评论
        res = await COMMENT_API.getComment({
          article_id: this.articleId,
          pageNum,
        });
      } else if (this.type === 'message') {
        // 留言板
        res = await MESSAGE_API.getMessage({
          pageNum,
        });
      }
      this.commentList = res.data.list;
      this.total = res.data.total;
    },
    changeShow(v) {
      this.show = v;
    },
  },
};
</script>

<style lang="scss" scoped>
.comments-main {
  width: 100%;
  overflow: hidden;
  .comments-list-title {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 40px;
    color: #7d7d7d;
    font-weight: 400;
  }
}
</style>
