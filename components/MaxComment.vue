<template>
  <article class="max-comment" :class="direction">
    <div class="l-comment_img">
      <img :src="imgUrl" />
    </div>
    <div class="l-comment_content" :class="direction">
      <div class="post-date">
        <i class="iconfont icon-time"></i>发布于 {{ time }}
      </div>
      <h3>{{ title }}</h3>
      <div class="post-meta">
        <span><i class="iconfont icon-attention"></i>{{ views }} 热度</span>
        <span class="comments-number">
          <i class="iconfont icon-mark"></i>{{ comments }} 评论
        </span>
        <span> <i class="iconfont icon-file"></i>{{ category }} </span>
      </div>
      <div class="content-main">
        {{ content }}
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题',
    },
    category: {
      type: String,
      default: '类别',
    },
    views: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    time: {
      type: String,
      default: '2020-07-17',
    },
    content: {
      type: String,
      default: '内容',
    },
    type: {
      type: String,
      default: 'min',
    },
    imgUrl: {
      type: String,
      default: '',
    },
    direction: {
      type: String,
      default: 'row',
    },
  },
};
</script>

<style lang="scss" scoped>
.max-comment {
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
    .l-comment_img {
      img {
        transform: scale(1.1);
      }
    }
  }
  .l-comment_img {
    width: 462px;
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
  .l-comment_content {
    width: 438px;
    box-sizing: border-box;
    padding: 30px;
    .post-date {
      color: #000000a6;
      i {
        margin-right: 5px;
        color: rgb(152, 152, 152);
        font-size: 14px;
      }
    }
    h3 {
      margin: 18px 0;
      font-weight: bold;
    }
    .post-meta {
      color: rgb(136, 136, 136);
      font-size: 14px;
      i {
        margin-right: 5px;
        color: rgb(152, 152, 152);
        font-size: 14px;
      }
    }
    .float-content {
      height: 90px;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.66);
      line-height: 23px;
      overflow: hidden;
      margin: 16px 0px 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    .content-main {
      padding: 16px 0;
    }
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
